/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        surface: "#F5F5F7",
        ink: "#1D1D1F",
        accent: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          light: "#60A5FA",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"Inter"',
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        "2xl": "24px",
        "3xl": "30px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.06)",
        card: "0 10px 40px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 60px rgba(37, 99, 235, 0.15)",
        glass: "0 8px 32px rgba(31, 38, 135, 0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
