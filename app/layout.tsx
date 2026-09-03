import type { Metadata } from "next";
import { Instrument_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vijay — Full Stack Developer",
  description:
    "Personal portfolio of Vijay, a creative developer crafting premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${fragmentMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
