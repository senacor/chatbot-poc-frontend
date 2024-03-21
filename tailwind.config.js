/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      borderColor: {
        "qonto-border": "#b8b8b5",
      },
      borderWidth: {
        "1": "1px"
      }
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          qonto: {
            "primary": "#dff9f0",
            "primary-content": "#1d1d1b",
            "secondary": "#efe9fe",
            "secondary-content": "#1d1d1b",
            "neutral-content": "#1d1d1b",
            "accent": "#ffeadd",
            "info": "#fdffd0",

            "base-100": "#ffffff",
            "base-300": "#f9f9f9",
          }
        },
        "dark",
        "emerald"
      ]
    }
  }
  
  