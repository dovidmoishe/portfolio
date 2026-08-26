import { ProjectsViewModel } from "./types";

export function createProjectsViewModel(): ProjectsViewModel {
  return {
    projects: [
      {
        slug: "edulearn",
        name: "EduLearn.fun",
        description:
          "An AI learning agent that helps people build real skills faster through active recall, accountability, and proof-of-work.",
        shortDescription: "An AI learning companion for building real skills.",
        fullDescription:
          "EduLearn helps learners create a personalized AI agent, follow an adaptive roadmap, practice with generated quizzes and flashcards, stay consistent with revision sessions and reminders, and turn completed work into visible, verifiable achievements.",
        year: "2025",
        type: "Education",
        client: "Personal Project",
        technologies: [
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "TailwindCSS", icon: "tailwindcss" },
          { name: "NestJS", icon: "nestjs" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Redis", icon: "redis" },
          { name: "Supabase", icon: "supabase" }

        ],
        link: "https://edulearn.fun",
        previewImage: "/projects/edulearn.png",
        logoSrc: "/edulear.jpg",
        collection: "selected",
      },
      {
        slug: "isitsafe",
        name: "isitsafe.io",
        description:
          "A crypto reviews platform for projects that help build trust from the community through platform scores",
        shortDescription: "A trust and review platform for crypto projects.",
        fullDescription:
          "A crypto reviews platform that helps users evaluate projects through public reviews, platform scores, and trust signals designed to make community feedback easier to understand.",
        year: "2022",
        type: "Crypto Reviews",
        client: "Product",
        technologies: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Web3Auth", icon: "web3auth" },
          { name: "TailwindCSS", icon: "tailwindcss" },
          { name: "AntD", icon: "antdesign" }
        ],
        link: "https://isitsafe.io",
        previewImage: "/projects/isitsafe.png",
        logoSrc: "/work/isitsafe.png",
        collection: "selected",
      },
      {
        slug: "jurix",
        name: "Jurix",
        description:
          "A WhatsApp-led crypto trading platform that helps users in Nigeria buy and sell supported assets for naira through guided quote flows.",
        shortDescription: "A simpler way to trade crypto through WhatsApp.",
        fullDescription:
          "Jurix gives users in Nigeria a simpler way to move between naira and supported crypto assets with clear quotes, guided WhatsApp steps, and settlement-focused transaction flows.",
        year: "2026",
        type: "Crypto Trading",
        client: "Client Project",
        technologies: [
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "TailwindCSS", icon: "tailwindcss" },
          { name: "Solana", icon: "solana" },
          { name: "Web3", icon: "web3" },
        ],
        link: "https://usejurix.com",
        previewImage: "/projects/jurix.png",
        logoSrc: "/projects/jurix-logo.jpg",
        logoScale: 2.25,
        collection: "selected",
      },
      {
        slug: "nectarfi",
        name: "NectarFi",
        description:
          "A fintech experience for moving, saving, and managing money across modern payment rails.",
        shortDescription: "Modern fintech experiences for moving and saving money.",
        fullDescription:
          "NectarFi is a fintech product focused on making modern money movement, savings, and payment experiences feel simple and reliable.",
        year: "2026",
        type: "Fintech",
        client: "Product",
        technologies: [
          { name: "React Native", icon: "react" },
          { name: "Solana", icon: "solana" },
        ],
        link: "https://nectarfi.finance",
        previewImage: "/nectarfi.png",
        previewFit: "contain",
        logoSrc: "/nectarfi.png",
        collection: "selected",
      },
      {
        slug: "steadyxchange",
        name: "SteadyXchange",
        description:
          "A straightforward exchange experience for digital assets and everyday users.",
        shortDescription: "A straightforward exchange experience for digital assets.",
        fullDescription:
          "SteadyXchange is an exchange product designed to make digital asset transactions more approachable for everyday users.",
        year: "2024",
        type: "Exchange",
        client: "Product",
        technologies: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
        ],
        link: "https://steadyxchange.com.ng",
        previewImage: "/work/steadyxchange.ico",
        previewFit: "contain",
        logoSrc: "/work/steadyxchange.ico",
        collection: "selected",
      },
      {
        slug: "ai-cost-router",
        name: "AI Cost Router",
        description:
          "A small Go HTTP service that decides whether tutor chat messages should call an LLM or return a canned reply.",
        fullDescription:
          "A small Go HTTP service for reducing unnecessary tutor-chat LLM calls. It exposes health and routing endpoints, protects routing with an internal Bearer token, returns canned replies for greetings, thanks, vague, empty, or acknowledgement messages, and lets the Nest API delegate the same routing heuristics without duplicating them in TypeScript.",
        year: "2026",
        type: "AI Infrastructure",
        client: "Open Source",
        technologies: [
          { name: "Go", icon: "go" },
        ],
        link: "https://github.com/dovidmoishe/ai-cost-router",
        previewImage: "/projects/ai-cost-router.svg",
        previewFit: "contain",
        collection: "experiment",
      },
      {
        slug: "agentic-wallet",
        name: "Agentic Wallet",
        description:
          "A Gemini-powered Solana wallet agent with encrypted keypairs, spend caps, RPC tools, and guarded transfers or Jupiter swaps.",
        fullDescription:
          "A Gemini-powered Solana wallet agent with encrypted keypairs, spend caps, RPC tools, and guarded transfer and swap workflows that keep autonomous actions constrained.",
        year: "2026",
        type: "Solana Agent",
        client: "Open Source",
        technologies: [
          { name: "Solana", icon: "solana" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Gemini", icon: "gemini" },
          { name: "Jupiter", icon: "jupiter" },
        ],
        link: "https://github.com/dovidmoishe/agentic_wallet",
        previewImage: "/projects/agentic-wallet-repo.svg",
        collection: "experiment",
      },
      {
        slug: "senviok-rust-sdk",
        name: "Senviok Rust SDK",
        description:
          "A Rust SDK for integrating with the Senviok API and building reliable developer tooling around it.",
        fullDescription:
          "An open-source Rust SDK for Senviok, designed to make API integrations more ergonomic and type-safe for Rust developers.",
        year: "2026",
        type: "Developer Tooling",
        client: "Open Source",
        technologies: [{ name: "Rust", icon: "rust" }],
        link: "https://github.com/Chekwube-Manuel/senviok-Rust-SDK",
        previewImage: "/projects/senviok-rust-sdk.svg",
        previewFit: "contain",
        collection: "experiment",
      },
      {
        slug: "challenge-app",
        name: "Challenge App",
        description:
          "An app that helps you track and save progress on challenges using MongoDB and Express. Built for a hackathon",
        fullDescription:
          "A challenge-tracking application built for a hackathon, focused on helping users save progress, track milestones, and keep challenge participation organized.",
        year: "2022",
        type: "Productivity",
        client: "Hackathon",
        technologies: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "Express", icon: "express" },
          { name: "Node.js", icon: "nodejs" },
          { name: "JavaScript", icon: "javascript" },
        ],
        link: "https://github.com/dovidmoishe/challenge-app-backend",
        previewImage: "/projects/challenge.png",
        collection: "experiment",
      },
    ],
  };
}
