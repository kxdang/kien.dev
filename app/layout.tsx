import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { PHProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kien Dang | Software Developer | React, Next.js, TypeScript",
  description:
    "Kien Dang is a Software Developer in Toronto specializing in React, Next.js, and TypeScript. Currently building web experiences at Penn Entertainment. View portfolio, projects, and blog.",
  keywords: [
    "Kien Dang",
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Toronto Developer",
    "Penn Entertainment",
    "theScore",
    "Coveo",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "kien.dev",
    "kiendang.me",
  ],
  authors: [{ name: "Kien Dang", url: "https://kien.dev" }],
  creator: "Kien Dang",
  publisher: "Kien Dang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kien.dev",
    siteName: "Kien Dang Portfolio",
    title: "Kien Dang - Software Developer",
    description:
      "Software Developer in Toronto specializing in React, Next.js, and modern web technologies. Currently at Penn Entertainment.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kien Dang - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kien Dang - Software Developer",
    description:
      "Software Developer specializing in React, Next.js, and TypeScript. View my portfolio and projects.",
    images: ["/og-image.png"],
    creator: "@k1dang",
  },
  alternates: {
    canonical: "https://kien.dev",
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
    google: "verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kien Dang",
    url: "https://kien.dev",
    image: "https://kien.dev/kien.png",
    sameAs: [
      "https://github.com/kxdang",
      "https://www.linkedin.com/in/kien-dang/",
      "https://kiendang.me",
      "https://kiendang.ca",
    ],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Penn Entertainment",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Waterloo",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "Canada",
    },
    description:
      "Software Developer specializing in React, Next.js, and TypeScript. Building web experiences at Penn Entertainment.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "Software Engineering",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-black dark:bg-slate-900 dark:text-white`}
      >
        <PHProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
            <Analytics />
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
