import { createWorkViewModel } from "./service";
import type { WorkViewModel } from "./types";

let workCache: WorkViewModel | null = null;

export function getWorkViewModel(): WorkViewModel {
  if (workCache) {
    return workCache;
  }

  workCache = createWorkViewModel();
  return workCache;
}
