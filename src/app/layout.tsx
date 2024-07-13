import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "VisioMuseAI",
  description:
    "Elevate your creativity on our platform! Create images from text inputs, give existing pictures a fresh twist with new text cues, and produce captivating image variations. Join us today to embark on your artistic journey – all at no cost! Unleash your imagination now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
