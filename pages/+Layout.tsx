// https://vike.dev/Layout

import 'solid-devtools';
import './Layout.css';
import './tailwind.css';
import type { JSX } from 'solid-js';
import { createMemo } from 'solid-js';
import { cx } from 'tailwind-variants/lite';
import { usePageContext } from 'vike-solid/usePageContext';

export default function Layout(props: { children?: JSX.Element }) {
  return (
    <div class='min-h-screen bg-bg'>
      <Navbar />
      <main class='pt-26 md:pt-21'>
        <div id='page-content'>{props.children}</div>
      </main>
    </div>
  );
}

function NavLink(props: {
  href: string;
  label: string;
  children?: JSX.Element;
}) {
  const href = () => props.href;
  const urlPathname = usePageContext().urlPathname;
  const isActive = createMemo(() =>
    href() === '/'
      ? urlPathname === href()
      : urlPathname.startsWith(href())
  );

  return (
    <a
      href={href()}
      class={cx(
        'flex items-center gap-1.5 text-lg text-white/50 transition-colors',
        `duration-200 hover:text-white/80 ${isActive() ? 'text-primary' : ''}`
      )}
    >
      <span class='hidden sm:inline'>{props.label}</span>
      {props.children}
    </a>
  );
}

const Navbar = () => (
  <nav class='fixed top-0 inset-x-0 z-50 py-5 px-10 md:py-3.5 md:px-5'>
    <div
      class={cx(
        'flex items-center justify-between bg-surface border border-border rounded-full',
        'opacity-90 py-0 px-9 h-16 md:h-14 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[25px]'
      )}
    >
      <a
        href='/'
        class={cx(
          'text-xl md:text-base font-bold bg-linear-to-r from-primary',
          'via-[#3860c8] to-[#2a4bb4] bg-clip-text text-transparent'
        )}
      >
        Kris Schneider
      </a>
      <div class='flex items-center gap-7'>
        <NavLink href='/' label='Home'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1053 14.2652 12 14 12H10C9.73478 12 9.48043 12.1053 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21M3 9.99999C2.99993 9.70906 3.06333 9.42161 3.18579 9.15771C3.30824 8.8938 3.4868 8.65979 3.709 8.47199L10.709 2.47199C11.07 2.1669 11.5274 1.99951 12 1.99951C12.4726 1.99951 12.93 2.1669 13.291 2.47199L20.291 8.47199C20.5132 8.65979 20.6918 8.8938 20.8142 9.15771C20.9367 9.42161 21.0001 9.70906 21 9.99999V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.99999Z'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </NavLink>

        <NavLink href='/about' label='About'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </NavLink>

        <NavLink href='/projects' label='Projects'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 10V14M12 10V12M16 10V16M4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.07C11.7406 5.9983 11.4167 5.91525 11.1271 5.75824C10.8375 5.60123 10.5912 5.37512 10.41 5.1L9.59 3.9C9.40882 3.62488 9.1625 3.39877 8.8729 3.24176C8.58331 3.08475 8.25941 3.0017 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 19.1 2.9 20 4 20Z'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </NavLink>

        <NavLink href='/resume' label='Resume'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14 2H6C5.46957 2 4.96086 2.21072 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89465 14.7348 8 15 8L20 8M16 22C16 20.9391 15.5786 19.9217 14.8284 19.1716C14.0783 18.4214 13.0609 18 12 18M12 18C10.9391 18 9.92172 18.4214 9.17157 19.1716C8.42143 19.9217 8 20.9391 8 22M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </NavLink>

        <NavLink href='/contact' label='Contact Me'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7 20.662V19C7 18.4696 7.21071 17.9609 7.58579 17.5858C7.96086 17.2107 8.46957 17 9 17H15C15.5304 17 16.0391 17.2107 16.4142 17.5858C16.7893 17.9609 17 18.4696 17 19V20.662M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </NavLink>
      </div>
    </div>
  </nav>
);
