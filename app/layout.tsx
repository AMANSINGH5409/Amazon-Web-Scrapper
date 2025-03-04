import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Amazon Web Scrapper",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex bg-[#f7fbff] h-screen">
        <Sidebar />
        <main>
          {/* Header */}
          {children}
        </main>
      </body>
    </html>
  );
}
