import { createAboutViewModel } from "./service";
import { AboutViewModel } from "./types";

let aboutCache: AboutViewModel | null = null;

export function getAboutViewModel(): AboutViewModel {
  if (aboutCache) {
    return aboutCache;
  }

  aboutCache = createAboutViewModel();
  return aboutCache;
}
