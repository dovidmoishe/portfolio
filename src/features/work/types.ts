export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  summary: string;
}

export interface WorkViewModel {
  works: WorkExperience[];
}
