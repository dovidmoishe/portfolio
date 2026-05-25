import { AboutViewModel } from "./types";

export function createAboutViewModel(): AboutViewModel {
  return {
    heading: "About",
    paragraphs: [
      "I'm David Baiye, a fullstack and mobile engineer focused on building products that feel fast, engaging, and genuinely useful. Over the past 7 years, I've worked across web, mobile, backend systems, AI-powered experiences, and fintech infrastructure, with a strong focus on shipping products people actually use.",
      "Currently, I work as a mobile engineer at NectarFi, where I build high-performance fintech experiences with React Native, Solana infrastructure, realtime systems, encrypted chat, savings flows, and modern payment integrations. I care deeply about performance, scalability, and product experience down to the smallest details.",
      "I'm also the founder of EduLearn.fun, a platform focused on making learning addictive in a good way through AI companions, quizzes, flashcards, gamification, multiplayer experiences, and personalized learning systems. My goal is to build products that help people grow, learn faster, and unlock opportunities regardless of where they come from.",
      "Most of my stack revolves around TypeScript, React Native, Next.js, NestJS, PostgreSQL, and modern cloud infrastructure, but lately I've also been diving deeper into Rust and Go for high-performance backend systems and critical services.",
      "Beyond coding, I love thinking about product strategy, startup systems, user psychology, growth loops, and building things that feel magical to everyday users. I enjoy moving fast, learning aggressively, and turning ambitious ideas into real products people can touch and experience.",
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
        src: "/dave.jpg",
        alt: "David Baiye taking a mirror selfie.",
        caption: "@dovidmoishe",
        rotationClassName: "rotate-9",
        zIndexClassName: "z-20",
      },
    ],
  };
}
