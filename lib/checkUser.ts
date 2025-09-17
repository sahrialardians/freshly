import { supabase } from "@/lib/supabaseClient";
import { Profile } from "@/types/profile";
import { currentUser } from "@clerk/nextjs/server";

export const checkUser = async (): Promise<Profile | null> => {
  try {
    const user = await currentUser();
    if (!user) {
      console.warn("No authenticated user found.");
      return null;
    }

    const { data, error } = await supabase.rpc("create_user_with_subscription", {
      _clerk_user_id: user.id,
      _email: user.emailAddresses[0]?.emailAddress ?? "",
      _full_name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      _image_url: user.imageUrl,
    });

    if (error) {
      console.error("Error creating user with subscription:", error);
      return null;
    }

    return data as Profile;
  } catch (err) {
    console.error("Unexpected error in checkUser:", err);
    return null;
  }
};
