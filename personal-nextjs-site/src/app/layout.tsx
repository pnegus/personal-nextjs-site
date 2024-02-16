import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const font = Roboto({ subsets: ["latin"] , weight: ["100", "300", "400", "500", "700", "900"]});

export const metadata: Metadata = {
  title: "Patrick Negus",
  description: "Howdy! This is Patrick's Site built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>"
      />
      <Navbar /> 
      <main className="flex min-h-screen flex-col items-center bg-white text-black">
          {children}
      </main>
      </body>
    </html>
  );
}
