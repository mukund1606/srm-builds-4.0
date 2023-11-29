import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { nextui } from "@nextui-org/react";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#1f8e61",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#bc9e5a",
              foreground: "#ffffff",
            },
            foreground: "#1c1e27",
            background: "#ffffff",
            focus: "#1f8e61",
          },
        },
        dark: {
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#58ba92",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#d8b973",
              foreground: "#000000",
            },
            foreground: "#ffffff",
            background: "#1c1e27",
            focus: "#58ba92",
          },
        },
      },
    }),
  ],
} satisfies Config;
