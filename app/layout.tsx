import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freshly - Inventory & Reminder Expiration Dates",
  description: "Platform is managing inventory and reminder expiration dates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} suppressHydrationWarning`}>
        <main className="max-w-md mx-auto min-h-screen relative overflow-hidden">
          {/* Header */}
          <Header />
          
          {/* Content */}
          {children}

          {/* Bottom Navigation */}
          <BottomNavigation />
        </main>
      </body>
    </html>
  );
}
