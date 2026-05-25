export interface HeroProfile {
  name: string;
  title: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
}

export interface HeroViewModel {
  profile: HeroProfile;
}
