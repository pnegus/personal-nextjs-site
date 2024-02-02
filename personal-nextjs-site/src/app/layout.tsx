import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTemplateLayout from "@/components/pageTemplateLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hey there!",
  description: "Howdy! This is Patrick's Site built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTemplateLayout>
          {children}
        </PageTemplateLayout>
      </body>
    </html>
  );
}
