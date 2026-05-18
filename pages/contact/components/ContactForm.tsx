import { createSignal } from 'solid-js';
import { cx } from 'tailwind-variants/lite';

import GenContainer from './GenContainer';

type FormData = {
  name: string;
  email: string;
  meessage: string;
};

type FormEvent = SubmitEvent & {
  currentTarget: HTMLFormElement;
  target: Element;
};

type ChangeEvent = Event & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

export default function ContactForm() {
  const [formData, setFormData] = createSignal<FormData>({
    name: '',
    email: '',
    meessage: ''
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('Form submitted:', formData());
    setFormData({
      name: '',
      email: '',
      meessage: ''
    });
  }

  function handleChange(event: ChangeEvent) {
    console.log('Form changed:', formData());
    setFormData({
      ...formData(),
      [event.target.name]: event.target.value
    });
  }

  return (
    <GenContainer id='contact-form' aria-label='Contact Form'>
      <form onSubmit={handleSubmit}>
        <label for='name' class='block mb-2 text-active'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='text'
          value={formData().name}
          onChange={handleChange}
          required={true}
          class={cx(
            'w-full bg-input border border-border rounded-lg',
            'px-4 py-3 focus:outline-none',
            'focus:ring-2 focus:ring-primary'
          )}
        />
      </form>
    </GenContainer>
  );
}
