import type { Metadata } from "next";
import "./globals.css";
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
