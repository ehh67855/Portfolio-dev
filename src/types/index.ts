export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  studentLife?: StudentLifeEntry[] | StudentLifeProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export type ProjectCategory = "personal" | "research" | "hackathon" | "class";

export interface ProjectMediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string; // thumbnail/cover image
  category?: ProjectCategory; // optional for backward compatibility
  description?: string; // detailed description for modal
  media?: ProjectMediaItem[]; // gallery and/or demo video(s)
  linkPreview?: string;
  linkSource?: string;
  tags?: string[]; // technology or topic tags
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface StudentLifeProps {
  description: string;
  highlights: string[];
}

export interface StudentLifeEntry {
  title: string; // organization name
  role: string;
  summary: string;
  highlights?: string[]; // bullets
  collaborators?: string[]; // tags/badges
  media?: { type: "image" | "icon" | "link"; src: string; alt?: string }[];
  links?: { text: string; href: string }[];
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
