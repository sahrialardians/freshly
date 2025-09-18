import { supabase } from "@/lib/supabaseClient";
import { Profile } from "@/types/profile";
import { currentUser } from "@clerk/nextjs/server";

export const checkUser = async (): Promise<Profile | null> => {
  const user = await currentUser();
  if (!user) {
    console.warn("No authenticated user found.");
    return null;
  }
  
  try {
    // Destructure response dari maybeSingle()
    const { data: existingUser, error: fetchError } = await supabase
      .from("profiles")
      .select("*")
      .eq("clerk_user_id", user.id)
      .maybeSingle();

    if (fetchError) {
      // maybeSingle() should NOT error for 0 rows, tapi tetap tangani error lain
      console.error("Error fetching profile:", fetchError);
      return null;
    }

    // Jika user sudah ada -> langsung return
    if (existingUser) {
      return existingUser as Profile;
    }

    // Kalau belum ada -> panggil RPC untuk create user + subscription (atomic)
    const { data: rpcData, error: rpcError } = await supabase.rpc("create_user_with_subscription",
      {
        _clerk_user_id: user.id,
        _email: user.emailAddresses?.[0]?.emailAddress ?? "",
        _full_name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || null,
        _image_url: user.imageUrl ?? null,
      }
    );

    if (rpcError) {
      console.error("Error creating user with subscription:", rpcError);
      return null;
    }

    // Normalisasi response RPC (bisa jadi object langsung, atau array)
    const createdProfile = Array.isArray(rpcData) ? rpcData[0] : rpcData;
    return (createdProfile as Profile) ?? null;
  } catch (err) {
    console.error("Unexpected error in checkUser:", err);
    return null;
  }
};
