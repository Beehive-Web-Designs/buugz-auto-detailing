import type { Metadata } from "next";
import { Kanit, Inter } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-kanit",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["300", "400", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
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
        {children}
      </body>
    </html>
  );
}
