/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.css', // Add paths to all files where Tailwind classes will be used
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      maxWidth:{
        '9xl':"120rem"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
    },
  },
  plugins: [],
}
