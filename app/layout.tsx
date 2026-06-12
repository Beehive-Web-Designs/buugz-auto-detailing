import type { Metadata } from "next";
import { Kanit, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const kanit = Kanit({
  weight: ["900"],
  style: ["normal"],
  variable: "--font-kanit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buugz Detailing | High Energy Shine",
  description: "High-velocity detailing for those who demand perfection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${inter.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
