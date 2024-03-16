/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
