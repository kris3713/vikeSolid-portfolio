// https://vike.dev/Layout

import 'solid-devtools';
import './Layout.css';
import './tailwind.css';
import type { JSX } from 'solid-js';

import logo from '../assets/logo.svg';
import Link from '../components/Link';

type props = { children?: JSX.Element };

export default function Layout(props: props) {
  return (
    <div class='flex max-w-5xl m-auto'>
      <Sidebar>
        <Logo />
        <Link href='./'>Welcome</Link>
        <Link href='./todo'>Todo</Link>
        <Link href='./star-wars'>Data Fetching</Link>
      </Sidebar>
      <Content>{props.children}</Content>
    </div>
  );
}

const Sidebar = (props: props) => (
  <div
    id='sidebar'
    class='p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200'
  >
    {props.children}
  </div>
);

const Content = (props: props) => (
  <div id='page-container'>
    <div id='page-content' class='p-5 pb-12 min-h-screen'>
      {props.children}
    </div>
  </div>
);

const Logo = () => (
  <div class='p-5 mb-2'>
    <a href='/'>
      <img src={logo} height={64} width={64} alt='logo' />
    </a>
  </div>
);
