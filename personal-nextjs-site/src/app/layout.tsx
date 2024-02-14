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
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>"
      />
        <PageTemplateLayout>
          {children}
        </PageTemplateLayout>
      </body>
    </html>
  );
}
