// https://vike.dev/Layout

import 'solid-devtools';
import type { ParentProps } from 'solid-js';

import './Layout.css';
import './tailwind.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const Layout = (props: ParentProps) => (
  <div id='layout' class='min-h-screen bg-bg'>
    <NavBar />
    <main id='page-content' class='pt-26 md:pt-21'>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;
