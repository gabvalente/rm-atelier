/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'custom-light': '#F8F9FA',
		  'custom-gray-1': '#E9ECEF',
		  'custom-gray-2': '#DEE2E6',
		  'custom-gray-3': '#CED4DA',
		  'custom-gray-4': '#ADB5BD',
		  'custom-dark-gray': '#6C757D',
		  'custom-dark-1': '#495057',
		  'custom-dark-2': '#343A40',
		  'custom-dark': '#212529',
		},
		fontFamily: {
		  sans: ['Lato', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  }
  