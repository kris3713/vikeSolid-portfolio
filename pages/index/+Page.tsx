import { CheckCircle2 } from 'lucide-solid';
import { For, type JSX } from 'solid-js';
import { cx } from 'tailwind-variants/lite';

import { GitHub, LinkedIn } from '../../components/CustomIcons';
import { highlights, paragraphs, skills } from './data';

import './styles.css';

const Section = (props: JSX.HTMLAttributes<HTMLElement>) => (
  <section
    id={props.id}
    class={cx(
      'flex items-center relative overflow-hidden',
      'min-h-(--min-height) p-(--padding)'
    )}
    aria-label={props['aria-label']}
  >
    {props.children}
  </section>
);

const Page = () => (
  <div id='index-page' class='flex flex-col' aria-label='Index Page'>
    {/* Hero Section */}
    <Section id='hero-section' aria-label='Hero Section'>
      <div
        id='fancy-pattern'
        class={cx(
          'absolute left-9 top-1/2 -translate-y-1/2',
          'w-175 h-175 pointer-events-none hero-background'
        )}
        aria-label='Fancy Pattern'
      />

      <div
        id='info-and-occupation'
        class={cx(
          'flex flex-col-reverse md:flex-row',
          'items-center justify-between w-full',
          'gap-10'
        )}
        aria-label='Info and Occupation'
      >
        <div id='info' class='flex flex-1 flex-col gap-7 min-w-0'>
          <p
            id='introduction'
            class='text-2xl leading-tight text-white'
            aria-label='Introduction'
          >
            <span class='text-white/60 font-normal'>Hi, I'm</span>
            <span class='block text-white font-bold'>
              Kris Schneider
            </span>
          </p>

          <p
            id='occupation'
            class={cx(
              'from-[#2a4bb4] via-primary to-[#2a4bb4]',
              'bg-clip-text text-transparent leading-tight',
              'text-[clamp(36px,4vw,56px)] font-bold',
              'bg-linear-to-r whitespace-pre-line'
            )}
            aria-label='Occupation'
          >
            {`Software
              Developer/Engineer`}
          </p>

          <div
            id='links'
            class='flex items-center gap-4.5'
            aria-label='Links'
          >
            <a
              id='github'
              href='https://github.com/kris3713'
              target='_blank'
              aria-label='GitHub'
            >
              <GitHub />
            </a>
            <a
              id='linkedin'
              href='https://www.linkedin.com/in/kris-schneider-b6715b230/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <LinkedIn />
            </a>
          </div>

          <div class='flex items-center gap-5'>
            <a
              href='mailto:Kris37Schneider@vivaldi.net'
              class={cx(
                'inline-flex items-center justify-center',
                'py-3.5 px-9 bg-primary rounded-xl',
                'text-xl font-bold text-white transition-colors',
                'duration-200 hover:bg-[#2d6ee0]'
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
          aria-label='Profile'
        >
          <img
            class='w-full aspect-square rounded-full object-cover'
            src='/profile.jpg'
            alt='Kris Schneider'
          />
        </div>
      </div>
    </Section>

    {/* About Section */}
    <Section id='about-section' aria-label='About Section'>
      <div
        id='info-columns'
        class={cx(
          'flex flex-col lg:flex-row items-start',
          'justify-between w-full gap-14'
        )}
        aria-label='Info Columns'
      >
        {/* Left column - bio */}
        <div
          id='bio'
          class='flex-1 flex flex-col gap-8 min-w-0'
          aria-label='Bio'
        >
          <div class='flex flex-col gap-3'>
            <span
              class={cx(
                'text-white/60 font-semibold',
                'tracking-widest text-sm uppercase'
              )}
            >
              Get to know me
            </span>
            <h1 id='about'>About Me</h1>
          </div>

          <article
            id='about-body'
            class={cx(
              'flex flex-col gap-4 text-white/70',
              'text-(size:--text-size) leading-relaxed'
            )}
            aria-label='About Body'
          >
            <For each={paragraphs}>
              {paragraph => <p>{paragraph}</p>}
            </For>
          </article>

          <ul
            id='highlights'
            class='flex flex-col gap-3'
            aria-label='Highlights'
          >
            <For each={highlights}>
              {highlight => (
                <li
                  class={cx(
                    'flex items-center text-white/80',
                    'text-(size:--text-size) gap-3'
                  )}
                >
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

        {/* Right column - skills */}
        <div
          id='skills'
          class='flex flex-col flex-1 gap-6 min-w-0 w-full'
          aria-label='Skills'
        >
          <div
            id='skills-grid'
            class={cx(
              'grid grid-cols-[repeat(2,1fr)]',
              'max-sm:grid-cols-[1fr] gap-3'
            )}
          >
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

          <div id='stats' class='stats-row' aria-label='Stats'>
            <div class='stat-item'>
              <span class='stat-number'>5+</span>
              <span class='stat-label'>
                Years of Software Developer Experience
              </span>
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
    </Section>
  </div>
);

export default Page;
