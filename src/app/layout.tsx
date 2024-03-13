import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Talkteon",
    description: "Elevate your engagement with seamless video conferencing and captivating podcasts",
  };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
    return (
      <html lang="en">
        <body className={inter.className}> 
        {children}
        </body>
      </html>
    );
  }
  