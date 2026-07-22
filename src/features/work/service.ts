import type { WorkViewModel } from "./types";

export function createWorkViewModel(): WorkViewModel {
  return {
    works: [
      {
        id: "nectarfi",
        role: "Frontend/Mobile Engineer",
        company: "NectarFi",
        link: "https://nectarfi.finance",
        logoSrc: "/nectarfi.png",
        duration: "2025 - Present",
        summary:
          "Lead mobile & web (Expo, Next.js) - payments, real-time features, and on-chain infrastructure.",
      },
      {
        id: "steadyxchange",
        role: "Contract Backend Engineer",
        company: "SteadyXchange",
        link: "https://steadyxchange.com.ng",
        logoSrc: "/work/steadyxchange.ico",
        duration: "2025",
        summary:
          "Built core off-ramp infrastructure for BSC, Bitcoin, Solana, and Ethereum mainnet.",
      },
      // {
      //   id: "jurix",
      //   role: "Lead Developer",
      //   company: "Jurix",
      //   duration: "2025",
      //   summary: "WhatsApp AI agent for multi-chain on-ramps and off-ramps.",
      // },
      {
        id: "edulearn",
        role: "Founder & CEO",
        company: "EduLearn.fun",
        link: "https://edulearn.fun",
        logoSrc: "/edulear.jpg",
        logoSrcDark: "/edulearn-white.jpg",
        duration: "2025 - Present",
        summary:
          "Built an AI learning agent for adaptive roadmaps, active-recall practice, accountability loops, and proof-of-work tracking.",
      },
      {
        id: "isitsafe",
        role: "Frontend Engineer",
        company: "IsItSafe.io",
        link: "https://isitsafe.io",
        logoSrc: "/work/isitsafe.png",
        duration: "2022 - 2025",
        summary:
          "Crypto trust & reviews platform - Next.js, TypeScript, Web3Auth.",
      },
      {
        id: "freelance",
        role: "Freelance Developer",
        company: "Independent",
        link: "#contact",
        logoSrc: "/dave.jpg",
        duration: "2022 - Present",
        summary: "15+ clients - full-stack web apps (Next.js, NestJS, MongoDB).",
      },
    ],
  };
}
