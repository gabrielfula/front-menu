import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Categories from "@/components/Categories";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cantinho do Churrasco Cardápio",
  description: "Menu for Cantinho do Churrasco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex pt-20 items-center flex-col px-5`}>
        <Header />
        <Categories />
        {children}
      </body>
    </html>
  );
}
