import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatBot";

const poppinsSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-poppins-sans",
});

export const metadata: Metadata = {
  title: "Enhance Your Health with StemRX and NAD+ - CELLREGEN UK",
  description:
    "Boost your body's stem cells by 200% with CellRegen's StemRX and NAD+. Renew, restore, and revitalize your body for a better, more vibrant you.",
  creator: "Asilcan Toper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.className} antialiased bg-primaryBg text-primaryFg`}
      >
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
