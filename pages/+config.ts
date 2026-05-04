import vikeSolid from 'vike-solid/config';
import type { Config } from 'vike/types';

// Default config (can be overridden by pages)
// https://vike.dev/config

export default <Config>{
  // https://vike.dev/head-tags
  title: 'My Vike App',
  description: 'Demo showcasing Vike',
  extends: [vikeSolid]
};
