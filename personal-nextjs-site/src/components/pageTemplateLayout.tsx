import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Hey there!",
//   description: "Howdy! This is Patrick's Site built with Next.js.",
// };

export default function PageTemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className = "grid grid-cols-3 w-full grid-cols-navbar flex-shrink-0">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between text-center pt-36 pb-36">
          {children}
      </main>
    </div>
  );
}
