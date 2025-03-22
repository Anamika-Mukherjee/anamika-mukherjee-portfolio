import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lato = Lato({
   subsets: ["latin"],
   weight: ["100", "300", "400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Anamika Mukherjee",
  description: "My detailed portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${lato.className} antialiased w-screen min-h-screen h-auto flex flex-col justify-between items-center`}
      >
         <Navbar />
        {children}
      </body>
    </html>
  );
}
