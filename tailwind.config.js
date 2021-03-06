module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // for navigator block & article block bg use
        block: {
          // for header navigator
          100: {
            light: "#f3f3f3",
            DEFAULT: "#f3f3f3",
            dark: "#1d1d1f",
          },
          // for card bg
          200: {
            light: "#fafafa",
            DEFAULT: "#fafafa",
            dark: "#141414",
          },
          // for article bg
          300: {
            light: "#ffffff",
            DEFAULT: "#ffffff",
            dark: "#000000",
          },
        },
        // for blog content text
        content: {
          // for footer text
          100: {
            light: "#86868b",
            DEFAULT: "#86868b",
            dark: "#6e6e73",
          },
          // for article text
          200: {
            light: "#1d1d1f",
            DEFAULT: "#1d1d1f",
            dark: "#f5f5f7",
          },
          // for navigator text
          300: {
            light: "#000000",
            DEFAULT: "#000000",
            dark: "#f5f5f7",
          },
        },
        // for link
        link: {
          light: "#0066cc",
          DEFAULT: "#0066cc",
          dark: "#2998ff",
        },
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
