import tailwindcss from '@tailwindcss/vite';
import vikeSolid from 'vike-solid/vite';
/// <reference types="@batijs/core/types" />
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import devtools from 'solid-devtools/vite'

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
