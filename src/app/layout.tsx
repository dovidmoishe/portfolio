import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { absoluteUrl, coreKeywords, expertise, profile, siteUrl } from "@/lib/seo";
import "./globals.css";

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
    // Keep the default appearance light without following the user's system theme.
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
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
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
