import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import { absoluteUrl, coreKeywords, expertise, profile, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "David Baiye Portfolio",
  title: {
    default:
      "David Baiye | Fullstack, React Native, Solana & AI Product Engineer",
    template: "%s | David Baiye",
  },
  description:
    "David Baiye is a fullstack and mobile software engineer building fast web, React Native, Solana, AI, fintech, and startup products with TypeScript, Next.js, NestJS, Go, and modern cloud infrastructure.",
  keywords: [...coreKeywords, ...expertise],
  authors: [{ name: profile.fullName, url: siteUrl }],
  creator: profile.fullName,
  publisher: profile.fullName,
  category: "Software Engineering Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "David Baiye Portfolio",
    title: "David Baiye | Fullstack, React Native, Solana & AI Product Engineer",
    description:
      "Portfolio of David Baiye, a product-focused engineer building web, mobile, AI, fintech, and Web3 systems for startups and growing teams.",
    firstName: "David",
    lastName: "Baiye",
    images: [
      {
        url: absoluteUrl(profile.image),
        width: 1200,
        height: 630,
        alt: "David Baiye, fullstack software engineer.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Baiye | Fullstack, React Native, Solana & AI Product Engineer",
    description:
      "Fullstack and mobile engineer for React Native, Next.js, AI, fintech, Solana, and startup product builds.",
    images: [absoluteUrl(profile.image)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const themeBootScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : systemDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body
        className={`${instrumentSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
