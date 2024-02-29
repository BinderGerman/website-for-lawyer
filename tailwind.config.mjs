/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        star: ["Star"],
        yeseva: ["Yeseva"],
        choco: ["Chocolates"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
