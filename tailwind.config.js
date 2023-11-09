/** @type {import('tailwindcss').Config} */
module.exports = {
	// content: ["*.{html,js}"],
	content: ["*.{html,js}", "./include/js/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				"orange-rkj": "#F17714",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
