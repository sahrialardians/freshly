import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import HeaderWrapper from "@/components/HeaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freshly - Expiry Tracker App",
  description: "Freshly makes it simple to manage your foods, drinks and ingredients on your kitchen and other items while reducing waste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} suppressHydrationWarning`}>
          <main className="max-w-md mx-auto min-h-screen relative overflow-hidden">
            {/* Header */}
            <HeaderWrapper />
            
            {/* Content */}
            {children}

            {/* Bottom Navigation */}
            <NavigationWrapper />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
