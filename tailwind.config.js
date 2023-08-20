/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // 设置默认容器样式
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      // 断点配置
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      // 颜色配置
      colors: {
        primary: "#101828",
        secondary: "#667085",
        accent: {
          // 自定义强调颜色，包括默认和悬停状态
          DEFAULT: "#ed1d24",
          hover: "#dd242a",
        },
        body: "#dedede", // 自定义页面背景颜色
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
