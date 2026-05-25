import { createHeroViewModel } from "./service";
import { HeroViewModel } from "./types";

let heroCache: HeroViewModel | null = null;

export function getHeroViewModel(): HeroViewModel {
  if (heroCache) {
    return heroCache;
  }

  heroCache = createHeroViewModel();
  return heroCache;
}
