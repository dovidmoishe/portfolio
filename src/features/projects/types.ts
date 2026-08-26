export interface ProjectTechnology {
  name: string;
  icon: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  fullDescription: string;
  year: string;
  type: string;
  client: string;
  technologies: ProjectTechnology[];
  link: string;
  previewImage: string;
  previewFit?: "cover" | "contain";
  logoSrc?: string;
  logoMark?: string;
  logoScale?: number;
  collection?: "selected" | "experiment";
}

export interface ProjectsViewModel {
  projects: Project[];
}
