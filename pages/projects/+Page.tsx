import './styles.css';
import { ExternalLink } from 'lucide-solid';
import { For } from 'solid-js';
import { cx } from 'tailwind-variants/lite';

import GitHub from '../../assets/github.svg';
import projects from './data';

export default function Page() {
  return (
    <div
      id='projects-page'
      class={cx(
        'flex flex-col relative gap-14',
        'justify-between w-full',
        'min-h-(--min-height) p-(--padding)'
      )}
      aria-label='Projects Page'
    >
      <h1 id='projects'>Projects</h1>
      <div class='flex flex-row md:flex-col flex-1 gap-6 w-full'>
        <div
          class={cx(
            'grid gap-5 grid-rows-[repeat(2,1fr)]',
            'md:grid-cols-[repeat(2,1fr)]'
          )}
        >
          <For each={projects}>
            {({ id, title, desc, tech_stacks, link, git_url }) => (
              <div class='project-card' id={id}>
                <h2 id='project-title'>{title}</h2>
                <p id='project-desc'>{desc}</p>

                <ul
                  id='project-tech-stacks'
                  class={cx(
                    'flex flex-wrap gap-4.5',
                    'wrap-normal self-start',
                    'mt-auto'
                  )}
                  aria-label='Project Tech Stacks'
                >
                  <For each={tech_stacks}>
                    {tech_stack => (
                      <li
                        id={tech_stack
                          .replace(' ', '_')
                          .toLowerCase()}
                        class={cx(
                          'text-primary bg-primary/11',
                          'rounded-md px-2 py-1'
                        )}
                        aria-label={tech_stack}
                      >
                        {tech_stack}
                      </li>
                    )}
                  </For>
                </ul>

                <div
                  id='links'
                  class={cx(
                    'flex items-center gap-4.5',
                    'self-end mt-auto'
                  )}
                  aria-label='Links'
                >
                  {link && (
                    <a
                      href={link}
                      target='_blank'
                      aria-label='External Link'
                    >
                      <ExternalLink size={24} viewBox='0 0 24 24' />
                    </a>
                  )}
                  <a
                    href={git_url}
                    target='_blank'
                    aria-label='Git Repository'
                  >
                    <img width={24} height={24} src={GitHub} />
                  </a>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
      {/* <div */}
      {/*   class={cx( */}
      {/*     'flex items-center relative overflow-hidden', */}
      {/*     'min-h-(--min-height) p-(--padding)' */}
      {/*   )} */}
      {/* > */}
      {/*   <div */}
      {/*     class={cx( */}
      {/*       'flex flex-row items-start', */}
      {/*       'justify-between w-full gap-14' */}
      {/*     )} */}
      {/*   > */}
      {/*     <div class='flex-1 flex flex-col gap-8 min-w-0'> */}
      {/*       <div class='flex flex-col gap-3'> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}
