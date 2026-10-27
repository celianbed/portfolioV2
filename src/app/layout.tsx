import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Célian Bedminster - Portfolio",
  description: "Développeur back-end et automatisation, en Master en alternance chez Bull et auto-entrepreneur. Mes projets, mes compétences et mon parcours.",
  icons: { icon: "/assets/img/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: required because ThemeToggle sets data-theme from localStorage before hydration
    <html lang="fr" data-theme="dark" suppressHydrationWarning className={`scroll-smooth ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
