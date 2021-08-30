const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
  purge: {
    enabled: enablePurge === true || enablePurge === 'true',
    content: [
      './src/**/*.html',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.less',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
