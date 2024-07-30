import type {Config} from "tailwindcss";
import colors from "./resources/colors.json";
import screens from "./resources/screens.json";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "digipattern-secondary": "url('/images/commons/digi-pattern-secondary.png')",
                "digipattern-info": "url('/images/commons/digi-pattern-info.png')",
            },
            animation: {
                "scroll-right-half": "scroll-right 90s linear infinite",
                "scroll-right-xs": "scroll-right 92s linear infinite",
                "grow-right": "grow-from-right 0.5s cubic-bezier(0,0,.11,1.06) forwards",
                "slide-left": "translate-from-right 0.6s ease-out forwards",
                "slide-right": "translate-from-left 0.6s ease-out forwards",
                "slide-down": "translate-from-top 0.6s ease-out forwards",
                "slide-up": "translate-from-bottom 0.6s ease-out forwards",
                "grow": "grow 0.6s ease-out forwards",
            },
            backgroundColor: {
                "primary": colors.primary.main,
                "secondary": colors.secondary.main,
                "info": colors.info.main,
                "themed-gray": colors.gray.default,
                "themed-darkgray": colors.gray.darkest,
                "themed-light-gray": colors.gray.light,
                "button-primary": colors.gray.darkest,
                "button-hover-primary": colors.button["hover-primary"],
                "button-hover-secondary": colors.button["hover-secondary"],
                "themed-darker-gray": colors.gray.darker,
                "themed-blue": colors.blue
            },
            colors: {
                "primary": colors.primary.main,
                "secondary": colors.secondary.main,
                "info": colors.info.main,
                "themed-gray": colors.gray.default,
                "themed-darkgray": colors.gray.darkest,
                "themed-light-gray": colors.gray.light,
                "button-primary": colors.gray.darkest,
                "button-hover-primary": colors.button["hover-primary"],
                "button-hover-secondary": colors.button["hover-secondary"],
                "themed-darker-gray": colors.gray.darker,
                "themed-blue": colors.blue
            },
            screens: {
                ...screens,
                ...(Object.entries(screens).map(([key, value]) => ({
                    ["max-" + key]: { max: (parseInt(value) - 1) + "px" },
                })).reduce((acc, val) => ({ ...acc, ...val }), {}))
            }
        },
    },
    plugins: [],
};
export default config;
