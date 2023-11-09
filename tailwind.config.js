/** @type {import('tailwindcss').Config} */
module.exports = {
	// content: ["*.{html,js}"],
	content: ["*.{html,js}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				"orange-rkj": "#F17714",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
