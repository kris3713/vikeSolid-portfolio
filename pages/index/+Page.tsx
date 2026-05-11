import {
  // Download,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  type LucideProps,
  Terminal
} from 'lucide-solid';
import { For, type JSX } from 'solid-js';

import './styles.css';

import { cx } from 'tailwind-variants/lite';

import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/icons8-linkedin-30.svg';

type Skills = {
  icon: (props: LucideProps) => JSX.Element;
  label: string;
  desc: string;
};

// TODO: Correct all these skills to be more accurate
const skills: Skills[] = [
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

// TODO: Change highlights to be more accurate
const highlights = [
  'Passionate about clean, performant code',
  'Strong focus on developer experience',
  'Experienced in agile team environments',
  'Always wanting to learn new technologies'
];

export default function Page() {
  return (
    <div class='flex flex-col'>
      {/* Hero Section */}
      <section
        id='hero-section'
        class='flex items-center relative overflow-hidden hero-intro'
      >
        <div
          id='fancy-pattern'
          class={cx(
            'absolute left-9 top-1/2 -translate-y-1/2',
            'w-175 h-175 pointer-events-none hero-background'
          )}
        />

        <div
          class={cx(
            'flex flex-col-reverse md:flex-row items-center',
            'justify-between w-full gap-10'
          )}
        >
          <div class='flex flex-1 flex-col gap-7 min-w-0'>
            <div class='text-2xl leading-tight text-white'>
              <span class='text-white/60 font-normal'>Hi, I'm</span>
              <span class='block text-white font-bold'>
                Kris Schneider
              </span>
            </div>

            <h1
              class={cx(
                'from-[#2a4bb4] via-primary to-[#2a4bb4]',
                'bg-clip-text text-transparent leading-tight',
                'text-[clamp(36px,4vw,56px)] font-bold',
                'bg-linear-to-r whitespace-pre-line'
              )}
            >
              {`Software
              Developer/Engineer`}
            </h1>

            <div class='flex items-center gap-4.5'>
              <a
                href='https://github.com/kris3713'
                class='flex items-center opacity-60 transition-opacity duration-200 hover:opacity-100'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <img width={24} height={24} src={GitHub} />
              </a>

              <a
                href='https://www.linkedin.com/in/kris-schneider-b6715b230/'
                class='flex items-center opacity-60 transition-opacity duration-200 hover:opacity-100'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <img width={30} height={30} src={LinkedIn} />
              </a>
            </div>

            <div class='flex items-center gap-5'>
              <a
                href='mailto:Kris37Schneider@vivaldi.net'
                class={cx(
                  'inline-flex items-center justify-center py-3.5 px-9 bg-primary rounded-xl',
                  'text-xl font-bold text-white transition-colors duration-200 hover:bg-[#2d6ee0]'
                )}
              >
                Hire Me
              </a>
              <a
                href='/contact'
                class={cx(
                  'inline-flex items-center justify-center py-3',
                  'px-7 rounded-xl border-2 border-white bg-transparent',
                  'text-xl font-bold text-white opacity-60',
                  'transition-opacity duration-200 hover:opacity-90'
                )}
              >
                Contact Me
              </a>
            </div>
          </div>

          <div
            id='profile'
            class={cx(
              'shrink-0 w-full md:w-[38%] xl:w-[42%]',
              'max-w-[320px] md:max-w-230 flex justify-center'
            )}
          >
            <img
              class='w-full aspect-square rounded-full object-cover'
              src='/profile.jpg'
              alt='Kris Schneider'
            />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id='about-section'
        class='about-section flex items-center relative overflow-hidden'
      >
        <div
          class={cx(
            'flex flex-col lg:flex-row items-start',
            'justify-between w-full gap-14'
          )}
        >
          {/* Left column — bio */}
          <div class='flex-1 flex flex-col gap-8 min-w-0'>
            <div class='flex flex-col gap-3'>
              <span class='text-white/60 font-semibold tracking-widest text-sm uppercase'>
                Get to know me
              </span>
              <h2
                id='about'
                class={cx(
                  'from-[#2a4bb4] via-primary to-[#2a4bb4]',
                  'bg-clip-text text-transparent leading-tight font-bold',
                  'bg-linear-to-r about-heading'
                )}
              >
                About Me
              </h2>
            </div>

            <article
              id='about-body'
              class={cx(
                'flex flex-col gap-4 text-white/70',
                'leading-relaxed about-body-text'
              )}
            >
              <p>
                I'm a Software Developer and Engineer with a passion for
                building elegant, high-performance web applications. With
                years of hands-on experience across the full stack, I
                thrive on turning complex problems into simple,
                user-friendly solutions.
              </p>
              <p>
                I enjoy working closely with product teams to craft
                experiences that are both technically sound and genuinely
                delightful to use. Outside of coding, I'm an avid
                open-source contributor and enjoy exploring the latest
                trends in web performance and developer tooling.
              </p>
            </article>

            <ul class='flex flex-col gap-3'>
              <For each={highlights}>
                {highlight => (
                  <li class='flex items-center gap-3 text-white/80 about-body-text'>
                    <CheckCircle2
                      size={18}
                      class='text-primary shrink-0'
                    />
                    {highlight}
                  </li>
                )}
              </For>
            </ul>

            {/* <a */}
            {/*   href='/resume.pdf' */}
            {/*   class={cx( */}
            {/*     'inline-flex items-center gap-2.5 self-start', */}
            {/*     'py-3.5 px-8 bg-primary rounded-xl', */}
            {/*     'text-lg font-bold text-white', */}
            {/*     'transition-colors duration-200 hover:bg-[#2d6ee0]' */}
            {/*   )} */}
            {/* > */}
            {/*   <Download size={18} /> */}
            {/*   Download CV */}
            {/* </a> */}
          </div>

          {/* Right column — skills */}
          <div class='flex-1 flex flex-col gap-6 min-w-0 w-full'>
            <div class='skills-grid'>
              <For each={skills}>
                {({ icon: Icon, label, desc }) => (
                  <div class='skill-card'>
                    <div class='skill-icon-wrap'>
                      <Icon size={22} class='text-primary' />
                    </div>
                    <div class='flex flex-col gap-0.5'>
                      <span class='font-semibold text-white text-base'>
                        {label}
                      </span>
                      <span class='text-white/50 text-sm'>{desc}</span>
                    </div>
                  </div>
                )}
              </For>
            </div>

            <div class='stats-row'>
              <div class='stat-item'>
                <span class='stat-number'>5+</span>
                <span class='stat-label'>Years of Experience</span>
              </div>
              {/* <div class='stat-divider' /> */}

              {/* <div class='stat-item'> */}
              {/*   <span class='stat-number'>40+</span> */}
              {/*   <span class='stat-label'>Projects Delivered</span> */}
              {/* </div> */}
              {/* <div class='stat-divider' /> */}

              {/* <div class='stat-item'> */}
              {/*   <span class='stat-number'>15+</span> */}
              {/*   <span class='stat-label'>Happy Clients</span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
