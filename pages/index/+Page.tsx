import { cx } from 'tailwind-variants/lite';

import './styles.css';

import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/icons8-linkedin-30.svg';

export default function Page() {
  return (
    <section class='flex items-center relative overflow-hidden hero-intro'>
      <div
        class={cx(
          'absolute left-9 top-1/2 -translate-y-1/2',
          'w-175 h-175 pointer-events-none hero-background'
        )}
      />

      <div class='flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10'>
        <div class='flex-1 flex flex-col gap-7 min-w-0'>
          <div class='text-2xl leading-tight text-white'>
            <span class='text-white/60 font-normal'>Hi, I'm</span>
            <span class='block text-white font-bold'>Kris Schneider</span>
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
              href='https://github.com'
              class='flex items-center opacity-60 transition-opacity duration-200 hover:opacity-100'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <img width={24} height={24} src={GitHub} />
            </a>

            <a
              href='https://linkedin.com'
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
              href='mailto:contact@example.com'
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
          class={cx(
            'shrink-0 w-full md:w-[38%] xl:w-[42%]',
            'max-w-[320px] md:max-w-130 flex justify-center'
          )}
        >
          <img
            class='w-full max-w-120 aspect-square rounded-full object-cover'
            src='/profile.jpg'
            alt='Kris Schneider'
          />
        </div>
      </div>
    </section>
  );
}
