import './styles.css';
import { ExternalLink } from 'lucide-solid';
import { For } from 'solid-js';
import { cx } from 'tailwind-variants/lite';

import GitHub from '../../assets/github.svg';
import projects from './data';

export default function Page() {
  return (
    <div
      class={cx(
        'flex flex-col relative gap-14',
        'justify-between w-full',
        'min-h-(--min-height) p-(--padding)'
      )}
    >
      <h1 id='projects'>Projects</h1>
      <div class='flex flex-col flex-1 gap-6 min-w-0 w-full'>
        <div class='grid grid-cols-[repeat(2,1fr)] gap-5'>
          <For each={projects}>
            {({ id, title, desc, link, git_url }) => (
              <div class='project-card' id={id}>
                <h2 id='project-title'>{title}</h2>
                <p
                  id='project-desc'
                  class={cx(
                    'text-(size:--desc-size) text-active',
                    'transition-colors leading-relaxed',
                    'text-wrap text-clip overflow-hidden'
                  )}
                >
                  {desc}
                </p>
                <div
                  id='links'
                  class={cx(
                    'flex items-center gap-4.5',
                    'self-end mt-auto'
                  )}
                >
                  {link && (
                    <a href={link} target='_blank'>
                      <ExternalLink width={24} height={24} viewBox='0 0 24 24' />
                    </a>
                  )}
                  <a href={git_url} target='_blank'>
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
