import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/shared/providers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const basePath = process.env.BASE_PATH ?? "";
const logoVersion = "kid-v1";

export const metadata: Metadata = {
  title: "Hey Teacher",
  description: "Voice-first AI education platform for modern families.",
  icons: {
    icon: `${basePath}/brand/ai-teacher-logo.svg?v=${logoVersion}`,
    shortcut: `${basePath}/brand/ai-teacher-logo.svg?v=${logoVersion}`,
    apple: `${basePath}/brand/ai-teacher-logo.svg?v=${logoVersion}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${spaceGrotesk.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
