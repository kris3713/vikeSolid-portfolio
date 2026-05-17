import { cx } from 'tailwind-variants/lite';

const Footer = () => (
  <footer
    id='footer'
    class='border-t border-border py-3.5'
    aria-label='Footer'
  >
    <div
      id='copyright_notice'
      class={cx(
        'container m-[2rem_auto] px-4',
        'text-center text-inactive',
        'leading-relaxed'
      )}
      aria-label='Copyright Notice'
    >
      © 2026 Kris Schneider (kris3713). All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
