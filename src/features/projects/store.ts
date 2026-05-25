import { createProjectsViewModel } from "./service";
import { Project, ProjectsViewModel } from "./types";

let projectsCache: ProjectsViewModel | null = null;

export function getProjectsViewModel(): ProjectsViewModel {
  if (projectsCache) {
    return projectsCache;
  }

  projectsCache = createProjectsViewModel();
  return projectsCache;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjectsViewModel().projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previousProject: Project;
  nextProject: Project;
} {
  const { projects } = getProjectsViewModel();
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  return {
    previousProject:
      projects[(safeIndex - 1 + projects.length) % projects.length],
    nextProject: projects[(safeIndex + 1) % projects.length],
  };
}
