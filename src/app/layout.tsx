import "@/styles/globals.css";

import { Poppins, Roboto } from "next/font/google";

import type { Metadata } from "next";
import Providers from "@/lib/providers";
import { ReactNode, Suspense } from "react";

import Header from "@components/layouts/Header";
import { cn } from "@lib/utils";
import BottomNavigationBar from "@components/bottomNavigationBar/bottomNavigationBar";
import Loader from "@/app/loader";

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

          <div className="flex w-full flex-1 overflow-hidden">
            <main className="xl2:max-w-[1440px] xl2:px-18 xl2:py-10 mr-auto ml-auto flex-1 overflow-y-auto px-5 py-5 md:px-8 md:py-6">
              <Suspense fallback={<Loader />}>{children}</Suspense>
            </main>
          </div>
          <BottomNavigationBar />
        </Providers>
      </body>
    </html>
  );
}
