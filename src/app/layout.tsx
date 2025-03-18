import "@/styles/globals.css";

import { Poppins, Roboto } from "next/font/google";

import type { Metadata } from "next";
import Providers from "@/lib/providers";
import { ReactNode } from "react";

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
        className={`${poppinsFont.variable} ${robotoFont.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
