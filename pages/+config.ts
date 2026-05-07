import vikeSolid from 'vike-solid/config';
import type { Config } from 'vike/types';

// Default config (can be overridden by pages)
// https://vike.dev/config
export default <Config>{
  // https://vike.dev/head-tags
  title: `Kris Schneider's portfolio`,
  description: `A show case of my work and myself.`,
  extends: [vikeSolid]
};
