import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#0E06F5',
				secondary: '#CCF30A',
				tertiary: '#FF9C00',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
