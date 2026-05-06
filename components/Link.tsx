import { createMemo } from 'solid-js';
import { usePageContext } from 'vike-solid/usePageContext';

import styles from './Link.module.css';

export default function Link(props: { href: string; children: string }) {
  const href = props.href;
  const urlPathname = usePageContext().urlPathname;
  const isActive = createMemo(() =>
    href === '/'
      ? urlPathname === href
      : urlPathname.startsWith(href)
  );

  return (
    <a href={href} class={isActive() ? styles.isActive : ''}>
      {props.children}
    </a>
  );
}
