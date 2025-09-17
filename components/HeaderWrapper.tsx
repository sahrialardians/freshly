"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  if (pathname === "/sign-up" || pathname === "/sign-in") return null;

  return <Header />;
}
