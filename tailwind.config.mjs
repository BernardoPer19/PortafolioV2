/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			sans: ['Roboto', 'sans-serif'], // Usa Roboto como fuente principal
		  },
		  backgroundImage: {
			'custom-gradient': 'radial-gradient(180deg, #000 40%, #63e 100%)',
		  },
		},
	  },
	plugins: [],
}
