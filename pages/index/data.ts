import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  type LucideProps,
  Terminal
} from 'lucide-solid';
import { type JSX } from 'solid-js';

type Skills = {
  icon: (props: LucideProps) => JSX.Element;
  label: string;
  desc: string;
};

// TODO: Correct all these skills to be more accurate
export const skills: Skills[] = [
  {
    icon: Code2,
    label: 'Frontend Dev',
    desc: 'React, SolidJS, Vue, HTML'
  },
  {
    icon: Terminal,
    label: 'Backend Dev',
    desc: `Node.js/Bun (JavaScript/TypeScript), Go, Python, C#,`
  },
  {
    icon: Database,
    label: 'Databases',
    desc: 'PostgreSQL, Redis/Valkey, MongoDB'
  },
  {
    icon: Globe,
    label: 'Web APIs',
    desc: 'REST'
  },
  {
    icon: Layers,
    label: 'Architecture',
    desc: 'Microservices, Serverless'
  },
  {
    icon: Cpu,
    label: 'DevOps',
    desc: 'Docker, Podman, CI/CD, AWS'
  }
];

export const paragraphs = [
  `I'm a Software Developer and Engineer with a passion for
  building elegant, high-performance web applications. With
  years of hands-on experience across the full stack, I
  thrive on turning complex problems into simple,
  user-friendly solutions.`,
  `I enjoy working closely with product teams to craft
  experiences that are both technically sound and genuinely
  delightful to use. Outside of coding, I'm an avid
  open-source contributor and enjoy exploring the latest
  trends in web performance and developer tooling.`
];
