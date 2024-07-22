import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NavbarTop />
        {children}
        <NavbarBottom />
      </body>
    </html>
  );
}
