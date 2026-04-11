import type { Metadata } from "next";
import { Inter,Mulish } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Upac Library",
  description: "Université Protestante d'Afrique Centrale - Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${mulish.className} antialiased`}>
        {children}
        </body>
    </html>
  );
}
