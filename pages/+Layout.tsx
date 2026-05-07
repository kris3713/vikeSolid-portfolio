// https://vike.dev/Layout

import 'solid-devtools';
import './Layout.css';
import './tailwind.css';
import {
  CircleUserRound,
  FileUserIcon,
  FolderKanban,
  House,
  Info
} from 'lucide-solid';
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
  // oxlint-disable-next-line solid/reactivity
  const { href } = props;
  const urlPathname = () => usePageContext().urlPathname;
  const isActive = createMemo(() =>
    href === '/' ? urlPathname() === href : urlPathname().startsWith(href)
  );

  return (
    <a
      href={href}
      class={cx(
        'flex items-center gap-1.5 text-lg duration-200 transition-colors',
        `hover:text-active ${isActive() ? 'text-primary' : 'text-inactive'}`
      )}
    >
      <span class='hidden sm:inline'>{props.label}</span>
      {props.children}
    </a>
  );
}

const Navbar = () => (
  <nav
    id='navbar'
    class='fixed top-0 inset-x-0 z-50 py-5 px-10 md:py-3.5 md:px-5'
  >
    <div
      class={cx(
        'flex items-center justify-between bg-surface/80 border border-border',
        'backdrop-blur-[25px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]',
        'py-0 px-9 h-16 md:h-14 rounded-full'
      )}
    >
      <a
        href='/'
        class={cx(
          'text-xl md:text-base font-bold bg-linear-to-r bg-clip-text',
          'text-transparent from-primary via-[#3860c8] to-[#2a4bb4]'
        )}
      >
        Kris Schneider
      </a>
      <div id='sections' class='flex items-center gap-7'>
        <NavLink href='/' label='Home'>
          <House width={24} height={24} viewBox='0 0 24 24' />
        </NavLink>

        <NavLink href='/#about-me' label='About'>
          <Info width={24} height={24} viewBox='0 0 24 24' />
        </NavLink>

        <NavLink href='/projects' label='Projects'>
          <FolderKanban width={24} height={24} viewBox='0 0 24 24' />
        </NavLink>

        <NavLink href='/resume' label='Resume'>
          <FileUserIcon width={24} height={24} viewBox='0 0 24 24' />
        </NavLink>

        <NavLink href='/contact' label='Contact Me'>
          <CircleUserRound width={24} height={24} viewBox='0 0 24 24' />
        </NavLink>
      </div>
    </div>
  </nav>
);
