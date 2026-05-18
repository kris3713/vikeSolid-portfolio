import { cx } from 'tailwind-variants/lite';

import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const Page = () => (
  <section
    id='contact-page'
    class={cx(
      'flex flex-col relative gap-14',
      'justify-between w-full',
      'min-h-(--min-height) p-(--padding)'
    )}
    aria-label='Contact Page'
  >
    <h1 id='contact'>Contact Me</h1>
    {/* <div class='flex items-center'></div> */}
    <div
      id='contact-info-and-form'
      class={cx(
        'grid items-center gap-3 mb-12',
        'md:grid-cols-2 grid-rows-2'
      )}
      aria-label='Contact Info and Form'
    >
      <ContactInfo />
      <ContactForm />
    </div>
  </section>
);

export default Page;
