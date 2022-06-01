module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          25: 'rgb(245, 246, 248)',
        },
      },
    },
    fontFamily: {
      sans: [
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
