import type { Metadata } from "next";
import { Caveat, Kalam } from 'next/font/google';
import "./globals.css";
import "./handcrafted.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fresh & Fit Recipes",
  description: "Healthy meals, simple methods, everyday ingredients.",
};

// Import Google Fonts for handwritten style
const caveat = Caveat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat'
});

const kalam = Kalam({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kalam'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${caveat.variable} ${kalam.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}