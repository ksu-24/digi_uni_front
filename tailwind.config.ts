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
                "digipattern-secondary": "url('/images/digi-pattern-secondary.png')",
                "digipattern-info": "url('/images/digi-pattern-info.png')",
            },
            animation: {
                "slide-in-left": "0.7s ease-out 0s 1 slideInFromLeft",
                "slide-in-right": "0.7s ease-out 0s 1 slideInFromRight",
                "slide-out-left": "0.7s ease-out 0s 1 slideOutToLeft",
                "slide-out-right": "0.7s ease-out 0s 1 slideOutToRight",
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
            },
            screens: screens
        },
    },
    plugins: [],
};
export default config;
