import { createSignal, For } from 'solid-js';
import { cx } from 'tailwind-variants/lite';

import GenContainer from './GenContainer';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ChangeEvent = InputEvent & {
  /** There is a chance that `target` is possibly null. */
  target: HTMLInputElement | null;
};

export default function ContactForm() {
  const defaults = {
    name: '',
    email: '',
    message: ''
  };

  // const capFirstLetter = (str: string) =>
  //   str.charAt(0).toUpperCase() + str.slice(1);

  const [formData, setFormData] = createSignal<FormData>(defaults);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log('Form submitted:', formData());
    setFormData(defaults);
  }

  // TODO: Implement a send to email
  // TODO: functionality after form submission.

  function handleInput(event: ChangeEvent) {
    const target = event.target;
    if (target) {
      const { name, value } = target;
      console.log('Input changed:', { [name]: value });
      setFormData({
        ...formData(),
        [name]: value
      });
    }
  }

  return (
    <GenContainer id='contact-form' aria-label='Contact Form'>
      <form onSubmit={handleSubmit}>
        <For each={['name', 'email']}>
          {str => (
            <div id={`${str}-input`} class='flex flex-col gap-1'>
              <label
                id={`${str}-label`}
                for={str}
                class='block mb-2 text-active'
              >
                {str.charAt(0).toUpperCase() + str.slice(1)}
              </label>
              <input
                type='text'
                id={str}
                name='text'
                value={{ ...formData() }[str]}
                onInput={handleInput}
                required={true}
                class={cx(
                  'bg-primary/10 border border-border',
                  'px-4 py-3 rounded-lg focus:outline-none',
                  'focus:ring-2 focus:ring-primary w-full'
                )}
              />
            </div>
          )}
        </For>
        <div id='message-input' class='flex flex-col gap-1'>
          <label
            id='message-label'
            for='message'
            class='block mb-2 text-active'
          >
            Name
          </label>
          <input
            type='text'
            id='message'
            name='text'
            value={formData().message}
            onInput={handleInput}
            required={true}
            class={cx(
              'bg-primary/10 border border-border',
              'px-4 py-3 rounded-lg focus:outline-none',
              'focus:ring-2 focus:ring-primary w-full h-24'
            )}
          />
        </div>
      </form>
    </GenContainer>
  );
}
