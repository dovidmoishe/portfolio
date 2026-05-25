export interface AboutPhoto {
  src: string;
  alt: string;
  caption: string;
  rotationClassName: string;
  zIndexClassName: string;
}

export interface AboutViewModel {
  heading: string;
  paragraphs: string[];
  photos: AboutPhoto[];
}
