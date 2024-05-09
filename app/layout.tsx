import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import emailjs from "@emailjs/browser";

import "@/app/globals.css";
import "@/app/styles.css";
import { cn } from "@/lib/utils";
import { EMAILJS_PUBLIC_KEY } from "@/lib/constants";
import StarsBackground from "@/canvas/StarsBackground";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/NavBar";
// import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cosmic City",
  description: "Cosmic City of Mateusz Muszarski built in Next.js",
  keywords: [
    "society",
    "payment plan",
    "amenities",
    "houses",
    "apartments",
    "land",
    "real estate",
    "property",
    "pakistan",
    "lahore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize EmailJS
  (function () {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  })();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen text-foreground bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <NavBar />
        <StarsBackground />
        <Toaster />

        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
