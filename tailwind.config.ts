import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth:{
      container: '1520px',
      contentContainer:'1280px',
    },

    extend: {
      screens:{
        xs:'320px',
        sm:'375px',
        sm1:'500px',
        md:'667px',
        md1:'768px',
        lg:'960px',
        lg1:'1024px',
      xl:'1280px',
        '2xl':'1400px',
      },
      colors:{
        blue: '#0071dc',
        lightBlue:'#e6f1fc',
        yellow:'#ffc220',
        hoverBg:'#004f9a',
        Lighttext:'#46474a',

      },
      boxShadow:{
        bannerShadow:'0 1px 2px 1px #0000026'
      }

    },
  },
  plugins: [],
};
export default config;
