import { AboutViewModel } from "./types";

export function createAboutViewModel(): AboutViewModel {
  return {
    heading: "About",
    paragraphs: [
      "I'm David Baiye, a full-stack and mobile engineer with 7 years of experience building production software across web, mobile, backend systems, AI, and fintech.",
      "I currently work as a mobile engineer at NectarFi, a Solana consumer finance app, where I build and maintain mobile experiences spanning payments, savings, realtime systems, encrypted messaging, and on-chain integrations.",
      "I'm also the founder of EduLearn.fun, an AI-powered learning platform focused on personalized learning through AI agents, adaptive roadmaps, quizzes, flashcards, and study tools.",
      "My core stack includes TypeScript, React Native, Next.js, NestJS, PostgreSQL, and modern cloud infrastructure, with growing experience in Rust and Go.",
      "I focus on building reliable, high-performance products with strong user experiences, from early product decisions and architecture through implementation and production.",
    ],
    photos: [
      {
        src: "/hero/IMG000.jpg",
        alt: "David Baiye standing outdoors by a colorful mural.",
        caption: "@itsdavetech",
        rotationClassName: "-rotate-11",
        zIndexClassName: "z-10",
      },
      {
        src: "/about-dovidmoishe.jpeg",
        alt: "David Baiye speaking into a microphone at an event.",
        caption: "@dovidmoishe",
        rotationClassName: "rotate-9",
        zIndexClassName: "z-20",
      },
    ],
  };
}
