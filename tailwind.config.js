/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements-react/dist/js/**/*.js"],
	theme: {
		extend: {
			colors: {
				main: "#E7F7FE",
				submain: "#0593FF",
				btnHover: "#9999FF",
				blue: "#0274CA",
				textDefault: "#446883",
			},
		},
		fontFamily: {
			sans: ["REM", "sans-serif"],
		},
	},
	darkMode: "class",
	plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
