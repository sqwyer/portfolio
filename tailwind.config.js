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
		},
	},
	plugins: [],
};
