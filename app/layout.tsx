import type { Metadata } from "next";
import { Instrument_Sans, Fragment_Mono } from "next/font/google";
import { Toaster } from "sonner";
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
  title: "Kavana Srinivasa — Senior Frontend Developer & AI Solutions Engineer",
  description:
    "Portfolio of Kavana Srinivasa, accomplished Senior Frontend Developer with 5+ years of experience in Angular, React, TypeScript, and AI-powered chatbot solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${fragmentMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0b0c0e] text-[#f4f4f7] antialiased selection:bg-amber-500/30 selection:text-amber-200">
        {children}
        <Toaster position="bottom-right" richColors theme="dark" />
      </body>
    </html>
  );
}
