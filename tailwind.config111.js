/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          'paper': '#F2EFEA', // 宣纸白
          'ink': '#1A1A1A',   // 墨色
          'moss': '#8C927D',  // 苔藓绿
          'stone': '#D1CDC4', // 石材灰
        },
        fontFamily: {
          'serif': ['"Cormorant Garamond"', '"Noto Serif SC"', 'serif'],
          'sans': ['"Inter"', 'sans-serif'],
        },
        letterSpacing: {
          'widest': '.25em',
          'zen': '.5em',      // 更有意境的超宽间距
        }
      },
    },
    plugins: [],
  }