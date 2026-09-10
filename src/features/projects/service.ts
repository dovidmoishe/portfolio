import { ProjectsViewModel } from "./types";

export function createProjectsViewModel(): ProjectsViewModel {
  return {
    projects: [
      {
        slug: "edulearn",
        name: "EduLearn.fun",
        description:
          "An AI-powered Web3 learning platform that helps people build real skills through personalized roadmaps, active recall, quizzes, flashcards, and accountability.",
        shortDescription:
          "An AI-powered learning platform for Web3 and real-world skills.",
        fullDescription:
          "EduLearn helps people learn Web3 and other skills with a personalized AI learning agent. Learners can follow adaptive roadmaps, practice with generated quizzes and flashcards, stay consistent with revision sessions and reminders, and turn completed work into visible proof-of-work.",
        year: "2025",
        type: "Web3 Education",
        client: "Personal Project",
        technologies: [
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "TailwindCSS", icon: "tailwindcss" },
          { name: "NestJS", icon: "nestjs" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Redis", icon: "redis" },
          { name: "Supabase", icon: "supabase" },
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
          { name: "AntD", icon: "antdesign" },
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
          "A multichain WhatsApp crypto agent for buying, selling, swapping, and managing digital assets through conversational flows.",
        shortDescription:
          "A multichain crypto agent built directly into WhatsApp.",
        fullDescription:
          "Jurix makes interacting with crypto as simple as sending a WhatsApp message. Users can buy, sell, swap, and manage supported assets across multiple chains through conversational flows, with fiat on/off-ramp support for everyday transactions.",
        year: "2026",
        type: "Multichain Crypto Agent",
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
          "A Solana consumer finance app for payments, savings, earning, and everyday money movement.",
        shortDescription:
          "A Solana consumer app for everyday financial experiences.",
        fullDescription:
          "NectarFi is a Solana-powered consumer finance app that brings payments, savings, earning, and everyday money movement into one simple experience, making on-chain financial products accessible to everyday users.",
        year: "2026",
        type: "Solana Consumer Finance",
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
          "A multichain on/off-ramp app that makes moving between crypto and fiat simple for everyday users.",
        shortDescription:
          "A multichain on/off-ramp for crypto and fiat.",
        fullDescription:
          "SteadyXchange is a multichain on/off-ramp designed to make moving between digital assets and fiat simple and accessible, giving everyday users a straightforward way to enter and exit crypto across supported networks.",
        year: "2024",
        type: "Multichain On/Off-Ramp",
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
        slug: "solana-state",
        name: "Solana State",
        description:
          "An automated intelligence dashboard for monitoring Solana's network health, ecosystem activity, and key on-chain metrics.",
        shortDescription:
          "Real-time insights into Solana's network health and ecosystem activity.",
        fullDescription:
          "Solana State is an automated network intelligence dashboard that aggregates and analyzes key Solana metrics across network performance, validators, economic activity, and ecosystem growth. It transforms raw on-chain and ecosystem data into a clear, continuously updated view of the current state of Solana.",
        year: "2026",
        type: "Solana Infrastructure",
        client: "Open Source",
        technologies: [
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Python", icon: "python" },
          { name: "Solana", icon: "solana" },
          { name: "Web3", icon: "web3" },
        ],
        link: "https://solana.itsdavetech.me/",
        previewImage: "/projects/solana-state.png",
        collection: "experiment",
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
        technologies: [{ name: "Go", icon: "go" }],
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
