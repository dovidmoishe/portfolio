import { ProjectsViewModel } from "./types";

export function createProjectsViewModel(): ProjectsViewModel {
  return {
    projects: [
      {
        slug: "edulearn",
        name: "EduLearn.fun",
        description:
          "An AI learning agent that helps people build real skills faster through active recall, accountability, and proof-of-work.",
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
      },
      {
        slug: "isitsafe",
        name: "isitsafe.io",
        description:
          "A crypto reviews platform for projects that help build trust from the community through platform scores",
        fullDescription:
          "A crypto reviews platform that helps users evaluate projects through public reviews, platform scores, and trust signals designed to make community feedback easier to understand.",
        year: "2022 - Now",
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
      },
    ],
  };
}
