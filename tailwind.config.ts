import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			colors: {
				grey: {
					12: "#121212",
					D9: "#D9D9D9",
					22: "#222222",
					67: "#676767",
					87: "#878787",
					C3: "#C3C3C3",
					FE: "#FEFEFE",
					E1: "#1E1E1E",
				},
				blue: {
					6: "#0000ff",
				},
				red: {
					6: "#F05D56"
				}, green: {
					6: "#5BB9A6"
				}
			},
			width: {
				36: "100%",
			},
			fontFamily: {
				signika: "var(--font-signika-negative)",
				athiti: "var(--font-athiti)",
				source: "var(--font-source-sans-pro)",
			},
			height: {
				max: "max(100vh, 100%)",
			},
		},
  },
  plugins: [],
};
export default config;
