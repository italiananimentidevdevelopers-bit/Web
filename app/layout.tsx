import type { Metadata } from "next";
import { Inter, Vollkorn, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ItalianeMenti",
  description: "Corsi di lingua e cultura italiana",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${vollkorn.variable} ${sourceSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-inter bg-secondary-100 text-neutral-1000">{children}</body>
    </html>
  );
}
