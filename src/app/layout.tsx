import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionContextProvider } from "./components/SessionContext";
import { createClient } from '@/utils/supabase/client'

import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";

export const metadata: Metadata = {
  title: "Baby First",
  description: "Tracking your little ones progress day by day",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

    if (error || !data) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return (
    <html lang="en">
      <body className="min-h-screen Inter bg-bf-off-white">
        <NavbarTop />
        <div className="flex justify-center items-center bg-bf-off-white">
          {children}
        </div>
          <NavbarBottom />
      </body>
    </html>
  );
}
