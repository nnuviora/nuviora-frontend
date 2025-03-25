import "@/styles/globals.css";

import { Poppins, Roboto } from "next/font/google";

import type { Metadata } from "next";
import Providers from "@/lib/providers";
import { ReactNode } from "react";

import Header from "@components/layouts/Header";
import Footer from "@components/layouts/Footer";
import { cn } from "@lib/utils";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const robotoFont = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuviora",
  description: "Nuviora is a online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex h-screen flex-col items-center",
          `${poppinsFont.variable} ${robotoFont.variable} antialiased`,
        )}
      >
        <Providers>
          <Header />

          <div className="xl2:max-w-[1440px] flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto p-5">{children}</main>
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
