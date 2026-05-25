export interface ProjectTechnology {
  name: string;
  icon: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  year: string;
  type: string;
  client: string;
  technologies: ProjectTechnology[];
  link: string;
  previewImage: string;
  previewFit?: "cover" | "contain";
}

export interface ProjectsViewModel {
  projects: Project[];
}
