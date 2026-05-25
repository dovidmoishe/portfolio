import { HeroViewModel } from "./types";

export function createHeroViewModel(): HeroViewModel {
  return {
    profile: {
      name: "Dave",
      title: "Software Engineer",
      tagline:
        "I design and develop fast, scalable systems that solve real problems and feel great to use.",
      imageSrc: "/hero/IMG000.jpg",
      imageAlt: "David Baiye in front of a mural holding a phone in a workspace.",
    },
  };
}
