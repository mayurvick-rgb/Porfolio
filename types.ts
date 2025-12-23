export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}
