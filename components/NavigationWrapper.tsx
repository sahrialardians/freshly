"use client";

import { usePathname } from "next/navigation";
import BottomNavigation from "./BottomNavigation";

export default function NavigationWrapper() {
  const pathname = usePathname();

  if (pathname === "/sign-up" || pathname === "/sign-in") return null;

  return <BottomNavigation />;
}
