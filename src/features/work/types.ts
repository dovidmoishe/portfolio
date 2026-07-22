export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  link: string;
  logoSrc: string;
  logoSrcDark?: string;
  duration: string;
  summary: string;
}

export interface WorkViewModel {
  works: WorkExperience[];
}
