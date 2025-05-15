import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Samy Ali | Portfolio",
    template: "%s | Samy Ali",
  },
  description:
    "Full-stack developer specialized in React, Next.js, and Node.js development.",
  keywords: [
    "Full-stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "Portfolio",
    "Samy Ali",
  ],
  creator: "Samy Ali",
  metadataBase: new URL("https://samyali.es"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samyali.es",
    siteName: "Samy Ali's Portfolio",
    title: "Samy Ali - Full-stack Developer",
    description:
      "Full-stack developer specialized in React, Next.js, and Node.js development.",
    images: [
      {
        url: "https://samyali.es/preview.png",
        width: 1200,
        height: 630,
        alt: "Samy Ali - Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "fYpN_ToG58l_mH11smlYhEtElgIdOiFvldBfPWp7W6E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.className} 
      bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] xxl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
            <ThemeSwitch />
            <Analytics />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
