import { type JSX } from 'solid-js';

const GenContainer = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    id={props.id}
    class='flex flex-col gap-4 relative justify-between w-96'
    aria-label={props['aria-label']}
  >
    {props.children}
  </div>
);

export default GenContainer;
