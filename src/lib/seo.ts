import type { MetadataRoute } from "next";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://davidbaiye.com"
).replace(/\/$/, "");

export const profile = {
  fullName: "David Baiye",
  displayName: "Dave",
  role: "Fullstack Software Engineer",
  location: "Lagos, Nigeria",
  email: "hello@davidbaiye.com",
  image: "/hero/IMG000.jpg",
  sameAs: [
    "https://github.com/dovidmoishe",
    "https://edulearn.fun",
    "https://isitsafe.io",
  ],
};

export const coreKeywords = [
  "David Baiye",
  "Dave software engineer",
  "fullstack developer",
  "React Native developer",
  "Next.js developer",
  "TypeScript developer",
  "Solana developer",
  "Web3 developer",
  "AI product engineer",
  "fintech software engineer",
  "mobile app developer",
  "backend engineer",
  "NestJS developer",
  "Go backend developer",
  "startup product engineer",
  "hire fullstack developer",
  "hire React Native developer",
  "hire Solana developer",
  "Lagos software engineer",
  "Nigeria software engineer",
];

export const expertise = [
  "fullstack web development",
  "mobile app development",
  "React Native fintech apps",
  "Next.js portfolio and product websites",
  "Solana infrastructure",
  "Web3 products",
  "AI-powered education platforms",
  "LLM cost optimization",
  "backend APIs",
  "realtime systems",
  "encrypted chat",
  "payment integrations",
  "PostgreSQL",
  "NestJS",
  "Go services",
  "Rust systems",
  "product strategy",
  "startup MVP development",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getCanonicalPath(path = "/") {
  return path.startsWith("/") ? path : `/${path}`;
}

export function getProjectKeywords(project: {
  name: string;
  type: string;
  technologies: { name: string }[];
}) {
  return [
    project.name,
    `${project.type} case study`,
    ...project.technologies.map((technology) => technology.name),
    ...coreKeywords,
  ];
}

export function sitemapEntry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}
