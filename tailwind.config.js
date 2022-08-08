/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				100: "100%",
				xl: "72rem",
			},
			height: {
				100: "100%",
			},
			inset: {
				"1/5": "20%",
				"1/6": "16.66%",
				"2/5": "40%",
				"1/7": "14.28%",
				"1/8": "12.5%",
				"1/9": "11.11%",
				"1/10": "10%",
			},
			screens: {
				"h-sm": { raw: "(min-height: 500px)" },
				"h-md": { raw: "(min-height: 750px)" },
				"h-lg": { raw: "(min-height: 1000px)" },
				"h-xl": { raw: "(min-height: 1400px)" },
			},
		},
	},
	plugins: [],
};
