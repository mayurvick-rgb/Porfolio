import { Project, Experience, Skill, SocialLink } from './types';
import { Layers, Box, Cpu, Activity, Shield, ShoppingBag, BookOpen } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LeXi AI',
    category: 'AI Platform',
    description: 'An intelligent legal assistant platform simplifying complex documentation with generative AI.',
    tech: ['React Native', 'React Js','OpenAI API', 'Tailwind', 'MongoDB'],
    image: '/assets/lexi.jpeg',
    link:'https://www.lexiai.legal/'
  },
  {
    id: '2',
    title: 'Go Miles',
    category: 'Car Rental',
    description: 'Modern car rental platform with real-time availability and booking management.',
    tech: ['React', 'express.js', 'MongoDB', 'Talwind CSS','Three Fiber'],
    image: '/assets/gomiles.png',
    link:'https://carrentalfrontend-two.vercel.app/'
  },
  {
    id: '3',
    title: 'Resume Scorer',
    category: 'AI Tool',
    description: 'AI-powered resume analysis tool that scores and provides feedback on resume quality and ATS compatibility.',
    tech: ['React', 'Python', 'OpenAI API', 'Flask'],
    image: '/assets/resume.png',
    link:'https://www.linkedin.com/posts/mayur-kumawat-020369288_react-django-webscraping-activity-7392546678702231552-z8sN?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEXSBtgBQRsUBob_BMpJNBXMduyejEAMA_Q&utm_campaign=copy_link'
  },
  {
    id: '4',
    title: 'Cookbook App',
    category: 'Lifestyle',
    description: 'Social recipe sharing platform with nutritional analysis.',
    tech: ['React','Express','React native','MongoDb', 'Framer Motion'],
    image: '/assets/cookbook.png',
    link:'https://www.linkedin.com/posts/mayur-kumawat-020369288_cookbook-application-developed-in-react-native-activity-7259566261985026048-TwVX?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEXSBtgBQRsUBob_BMpJNBXMduyejEAMA_Q&utm_campaign=copy_link'
  },
  {
    id: '5',
    title: 'Weather app',
    category: 'Utility',
    description: 'Real-time weather application with location-based forecasts and interactive weather maps.',
    tech: ['React', 'Weather API', 'CSS3', 'JavaScript'],
    image: '/assets/weather.png',
    link:'https://www.linkedin.com/posts/mayur-kumawat-020369288_weather-app-developed-in-react-js-activity-7259453915253919744-FT0N?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEXSBtgBQRsUBob_BMpJNBXMduyejEAMA_Q&utm_campaign=copy_link'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Project Lead',
    company: 'Olcademy',
    period: '2025 - Present',
    description: 'Leading a team of 5 developers to build scalable ed-tech solutions. Optimized CI/CD pipelines.'
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Astute Lexi AI',
    period: 'Early 2025',
    description: 'Crafted the core UI library and integrated LLM responses into the chat interface.'
  },
  {
    id: '3',
    role: 'Web Developer',
    company: 'Ceeras',
    period: '2025',
    description: 'Developed high-performance landing pages and managed CMS migrations.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Firebase', category: 'backend' },
  { name: 'UI/UX Design', category: 'tools' },
  { name: 'Git & GitHub', category: 'tools' }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/mk09777777/Mayur_all_projects/tree/main', label: 'github.com/mayur' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mayur-kumawat-020369288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'linkedin.com/in/mayur' },
  { platform: 'Email', url: 'mayurvicky01234@gmail.com', label: 'hello@mayur.dev' }
];

export const NAV_ITEMS = [
  { label: 'Identity', href: '#identity' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Bio', href: '#bio' },
  { label: 'Contact', href: '#contact' },
];
