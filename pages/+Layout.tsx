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
import type { JSX, ParentProps } from 'solid-js';
import { createMemo } from 'solid-js';
import { cx } from 'tailwind-variants/lite';
import { usePageContext } from 'vike-solid/usePageContext';

type Props = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string;
};

export default function Layout(props: ParentProps) {
  return (
    <div id='layout' class='min-h-screen bg-bg'>
      <NavBar />
      <main class='pt-26 md:pt-21'>
        <div id='page-content'>{props.children}</div>
      </main>
    </div>
  );
}

function NavLink(props: Props) {
  const getProps = () => props;
  const { href, label } = getProps();

  const pageContext = usePageContext();
  const urlPathname = () => pageContext.urlPathname;
  const isActive = createMemo(() =>
    href === '/'
      ? urlPathname() === href
      : urlPathname().startsWith(href!)
  );

  return (
    <a
      href={href}
      id={props.id}
      class={cx(
        props.class ?? [
          'flex items-center gap-1.5 text-lg',
          'max-md:text-[10px] duration-200',
          'transition-colors hover:text-active',
          isActive() ? 'text-primary' : 'text-inactive'
        ]
      )}
      aria-label={label}
    >
      {label && (
        <span id='label' class='hidden lg:inline'>
          {label}
        </span>
      )}
      {props.children}
    </a>
  );
}

const NavBar = () => (
  <nav
    id='navbar'
    class={cx(
      'fixed top-0 inset-x-0 z-50',
      'py-5 px-10 md:py-3.5 md:px-5'
    )}
    aria-label='Navigation Bar'
  >
    <div
      class={cx(
        'flex items-center justify-between py-0 px-9 h-16',
        'max-md:h-14 backdrop-blur-[25px] bg-surface/80',
        'border border-border rounded-full',
        'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
      )}
    >
      <NavLink
        href='/'
        class={cx(
          'text-xl max-md:text-sm font-bold',
          'bg-linear-to-r bg-clip-text',
          'text-transparent from-primary',
          'via-[#3860c8] to-[#2a4bb4]'
        )}
      >
        Kris Schneider
      </NavLink>
      <ul id='sections' class='flex items-center gap-7'>
        <li id='index-route'>
          <NavLink href='/' label='Home'>
            <House size={24} viewBox='0 0 24 24' />
          </NavLink>
        </li>

        <li id='about-route'>
          <NavLink href='/#about' label='About'>
            <Info size={24} viewBox='0 0 24 24' />
          </NavLink>
        </li>

        <li id='projects-route'>
          <NavLink href='/projects' label='Projects'>
            <FolderKanban size={24} viewBox='0 0 24 24' />
          </NavLink>
        </li>

        {/*
          TODO: Create a HTML variant of the my resume
          that is heavily redacted for privacy.
        */}
        <li id='resume-route'>
          <NavLink
            // href='/resume'
            label='Resume'
          >
            <FileUserIcon size={24} viewBox='0 0 24 24' />
          </NavLink>
        </li>

        <li id='contact-route'>
          <NavLink
            // href='/contact'
            label='Contact Me'
          >
            <CircleUserRound
              size={24}
              viewBox='0 0 24 24'
            />
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
