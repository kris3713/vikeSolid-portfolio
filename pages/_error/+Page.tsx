import './styles.css'
import { Show } from 'solid-js';
import { cx } from 'tailwind-variants/lite';
import { usePageContext } from 'vike-solid/usePageContext';

export default function Page() {
  const pageContext = usePageContext();
  const is404 = () => pageContext.is404;

  return (
    <div
      id='error-page'
      class={cx(
        'flex flex-col relative gap-14',
        'w-full min-h-(--min-height) p-(--padding)'
      )}
      aria-label='Error Page'
    >
      <Show
        when={is404}
        fallback={
          <>
            <h1 id='error'>Internal Error</h1>
            <p id='error-message'>Something went wrong.</p>
          </>
        }
      >
        <h1 id='error'>Page Not Found</h1>
        <p id='error-message'>This page could not be found.</p>
      </Show>
    </div>
  );
}
