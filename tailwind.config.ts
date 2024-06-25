import type { Config } from 'tailwindcss';
import { addDynamicIconSelectors } from '@iconify/tailwind';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'card': 'var(--card-color)',
        'link': 'var(--link-color)',
        'accent': 'var(--accent-color)',

        //color definitions
        'coffee': {
          '50': '#f8f6ee',
          '100': '#efe9d2',
          '200': '#e1d2a7',
          '300': '#cfb475',
          '400': '#c19a4e',
          '500': '#b18641',
          '600': '#986a36',
          '700': '#7a502e',
          '800': '#63402a',
          '900': '#59392a',
          '950': '#331e15'
        },
        'darling': {
          '50': '#fff1f2',
          '100': '#ffe4e5',
          '200': '#fec8cd',
          '300': '#fda4ac',
          '400': '#fb7181',
          '500': '#f43f59',
          '600': '#e11d42',
          '700': '#be1237',
          '800': '#9f1235',
          '900': '#881334',
          '950': '#4c0517'
        },
        'dollar': {
          '50': '#f6f6f0',
          '100': '#e4e4d4',
          '200': '#d2d0b6',
          '300': '#b8b58c',
          '400': '#a39d6c',
          '500': '#948c5e',
          '600': '#7e7350',
          '700': '#665a42',
          '800': '#584c3b',
          '900': '#4d4336',
          '950': '#2b241d'
        },
        'dollar-accent': {
          '50': '#f3f6f3',
          '100': '#e3e9e2',
          '200': '#c7d4c6',
          '300': '#a0b69f',
          '400': '#6b886b',
          '500': '#557456',
          '600': '#405b42',
          '700': '#334935',
          '800': '#2a3b2b',
          '900': '#233124',
          '950': '#131b14'
        }
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
};
export default config;
