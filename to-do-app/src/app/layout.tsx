import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TodosProvider } from "@/store/Todos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TO DO APP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodosProvider>
          {children}
        </TodosProvider>
      </body>
    </html>
  );
}
