import type { Metadata } from "next";
import { Provider } from "@/app/ui/provider";
import "@/app/styles/globals.css";
import { radioCanada } from "@/app/styles/fonts";

export const metadata: Metadata = {
  title: "Ontario Votes 2025 results",
  description: "Ontario 2025 election results",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${radioCanada.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
