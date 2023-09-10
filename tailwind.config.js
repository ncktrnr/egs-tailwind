/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: {
    container: { center: true,
      padding: {
      DEFAULT: '0.5rem', sm: '1rem',
      lg: '1.5rem',
      xl: '2rem'
      }, 
    },

    extend: {
      fontFamily: { 
        headline: ['Merriweather'],
        'sans': ['Lato'],
        'light': ['LatoLight'],
      },
      colors: {
        'gold': '#fdca40',
        'aths': '#d6cfb2',
        'light-bg': '#f8f7f3',
        'dark-engine': '#3c3e42',
        'baragon': "#591903",
        'bakers': '#5f3400',
        'verdun-dark': '#3c4315',
        'verdun': '#50591c',
        'verdun-bright': '#78804a',

        link: {
          "text": "#0d77b5",
          "hover": "#50591c",
          "visited": "#51758B"
        }
      }, 
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
}

