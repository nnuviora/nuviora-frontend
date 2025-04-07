import "@/styles/globals.css";

import { Poppins, Roboto } from "next/font/google";

import type { Metadata } from "next";
import Providers from "@/lib/providers";
import { ReactNode, Suspense } from "react";

import Header from "@components/layouts/Header";
import { cn } from "@lib/utils";
import BottomNavigationBar from "@components/bottomNavigationBar/bottomNavigationBar";
import Loader from "@/app/loader";
import { Bounce, ToastContainer } from "react-toastify";
import { Breadcrumbs } from "@/components/accountForm/Breadcrumbs";

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
  icons: {
    icon: "/favicon.svg",
  },
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

          <div className="xl2:max-w-[1440px] xl2:px-18 xl2:py-4 mr-auto ml-auto flex w-full flex-1 flex-col overflow-hidden px-5 py-5 md:px-8 md:py-4">
            <Breadcrumbs className="hidden md:mb-4 md:block" />
            <main className="overflow-y-auto">
              <Suspense fallback={<Loader />}>{children}</Suspense>
            </main>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
            transition={Bounce}
          />
          <BottomNavigationBar />
        </Providers>
      </body>
    </html>
  );
}
