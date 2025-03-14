import type { Metadata } from "next";
import { radioCanada } from "@/app/styles/fonts";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "Ontario Votes 2025 results",
  description: "Ontario 2025 election results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${radioCanada.className} antialiased`}>{children}</body>
    </html>
  );
}
