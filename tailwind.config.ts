import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "72.5": "290px", // w-[290px] -> w-72.5
        "107": "428px", // h-[428px] -> h-107
        "190": "760px", // w-[760px] -> w-190
        "37.5": "150px", // w-[150px] -> w-37.5
        "56.25": "225px", // h-[225px] -> h-56.25
        "94.75": "379px", // w-[379px] -> w-94.75
        "144.25": "577px", // w-[577px] -> w-144.25
        "150": "600px", // h-[600px] -> h-150, max-h-[600px] -> max-h-150
        "15": "60px", // w-[60px] -> w-15
        "20": "80px", // h-[80px] -> h-20
      },
      zIndex: {
        "999": "999", // z-[999] -> z-999
      },
    },
  },
  plugins: [],
};

export default config;
