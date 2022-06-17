// tailwind.config.js
module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ],
    safelist: [
      'bg-blue-500',
      'text-center',
      'hover:opacity-100',
      // ...
      'lg:text-right',
    ]
  },
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ivoryOrange': '#FF8200',
        'white': '#ffffff',
        'ivoryGreen': '#009A44',
      },
      screens: {
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
