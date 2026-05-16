type Projects = {
  id: string; // Must be in lowercase
  title: string;
  desc: string;
  tech_stacks: string[];
  link?: string | null;
  git_url: string;
};

const projects: Projects[] = [
  {
    id: 'eventli',
    title: 'Capstone Project: Eventli',
    desc: `This is a Capstone Project created using TypeScript, Next.js (React), CSS, Tailwind
CSS, Supabase, and Stripe. Eventli is an event organizer designed to ease the
process of planning events and booking them. If you are a seller, it also doubles
as both an event creator, and an advertising platform.`,
    tech_stacks: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS',
      'Tailwind CSS',
      'Supabase',
      'Stripe'
    ],
    // link: 'https://evintli.com/', // Site is literally unavailable
    git_url: 'https://github.com/xkarmanx/eventli'
  },
  {
    id: 'dockerproject_cpsy300',
    title: 'DockerProject_CPSY300',
    desc: `This is a project created using CSharp (C#), dotNET,
TypeScript, Astro, SolidJS, CSS, Tailwind CSS, and Neon Postgres. This is my
first major project that I have taken seriously. This project is meant to be
an example of how to create a REST API that can be used with any API client
to request dummy data containing fake student names, student IDs, course names,
and present dates`,
    tech_stacks: [
      'CSharp',
      'dotNET',
      'TypeScript',
      'Astro',
      'SolidJS',
      'CSS',
      'Tailwind CSS'
    ],
    git_url: 'https://github.com/kris3713/DockerProject_CPSY300'
  },
  {
    id: 'fp_spsu23',
    title: 'FP_SPSU23',
    desc: `This is a project created using CSharp (C#). This is an example of a
dotNET MAUI app that creates and manages an SQLite database.`,
    tech_stacks: ['CSharp', 'dotNET', 'SQLite'],
    git_url: 'https://github.com/kris3713/FP_SPSU23'
  },
  {
    id: 'yacr',
    title: 'YACR (Yet Another Copr Repository)',
    desc: `This is a project created using UNIX shell (or bash)
scripts, FISH scripts, Python scripts, RPM spec files, and Nix flakes. The main purpose of this
project is for creating and updating RPM packages that I often use on my Ultramarine
Linux system (a Fedora Linux distro). Of course, that doesn’t mean other
users of Fedora (including distributions) can’t use it. They can make use of it as
well.`,
    tech_stacks: [
      'shell',
      'bash',
      'fish shell',
      'python',
      'rpm spec',
      'nix'
    ],
    git_url: 'https://github.com/kris3713/YACR'
  }
];

export default projects;
