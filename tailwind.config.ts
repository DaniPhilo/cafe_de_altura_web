import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#2A5B45",
        "custom-black": "#1F1815",
        "custom-white": "#FFF",
        "taupe": "#E3DED7",
        "custom-grey": "#515051",
        "custom-dark-grey": "rgba(247, 245, 243, 0.10)"
      },
      fontSize: {
        "title": ["40px", {
          "lineHeight": "44px",
          "fontWeight": "600"
        }],
        "subtitle": ["24px", {
          "lineHeight": "28px",
          "fontWeight": "500"
        }],
        "small-subtitle": ["18px", {
          "lineHeight": "24px",
          "fontWeight": "600"
        }],
        "regular": ["14px", {
          "lineHeight": "16px",
          "fontWeight": "400"
        }],
        "custom-bold": ["14px", {
          "lineHeight": "16px",
          "fontWeight": "600"
        }]
      }
    },
  },
  plugins: [],
}
export default config
