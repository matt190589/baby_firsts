import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";

export const metadata: Metadata = {
  title: "Baby First",
  description: "Tracking your little ones progress day by day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bf-off-white Inter">
        <NavbarTop />
        {children}
        <NavbarBottom />
      </body>
    </html>
  );
}
