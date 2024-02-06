import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  preload: true,
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Pereira - Frontend Developer",
  description:
    "I'm a frontend developer based in Aveiro, Portugal and I love to build web applications and websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="antialiased relative">{children}</div>
      </body>
    </html>
  );
}
