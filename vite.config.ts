import tailwindcss from '@tailwindcss/vite';
import devtools from 'solid-devtools/vite';
import vikeSolid from 'vike-solid/vite';
/// <reference types="@batijs/core/types" />
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    devtools({
      /* features options - all disabled by default */
      autoname: true // e.g. enable autoname
    }),
    vike(),
    vikeSolid(),
    tailwindcss()
  ]
});
