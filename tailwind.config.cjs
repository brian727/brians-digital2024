/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '200ch',
					}
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('flowbite/plugin')
	],
}
