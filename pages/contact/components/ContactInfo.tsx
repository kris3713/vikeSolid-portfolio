import { For } from 'solid-js';

import info from '../data';
import GenContainer from './GenContainer';

const ContactInfo = () => (
  <GenContainer id='contact-info' aria-label='Contact Info'>
    <p class='text-active mb-8 leading-relaxed'>
      I'm always interested in hearing about new projects and
      opportunities. Whether you have a question or just want to say
      hi, feel free to reach out!
    </p>
    <ul class='space-y-6'>
      <For each={info}>
        {({
          lucideIcon: LucideIcon,
          icon: Icon,
          label,
          desc,
          url
        }) => (
          <li
            id={label.toLowerCase()}
            class='flex items-center gap-2'
            aria-label={label}
          >
            <div class='bg-primary/10 p-3 rounded-lg text-primary'>
              {LucideIcon && (
                <LucideIcon size={24} viewBox='0 0 24 24' />
              )}
              {Icon && <Icon />}
            </div>
            <article
              id='links'
              class='flex flex-col leading-relaxed -mt-0.5'
            >
              <h2 class='font-semibold'>{label}</h2>
              {url ? (
                <a href={url} target='_blank'>
                  {desc}
                </a>
              ) : (
                <p class='opacity-60'>{desc}</p>
              )}
            </article>
          </li>
        )}
      </For>
    </ul>
  </GenContainer>
);

export default ContactInfo;
