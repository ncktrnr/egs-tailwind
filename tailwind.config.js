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
        'aths-light': '#dad3b9',
        'light-bg': '#f8f7f3',
        'v-light-bg':'#fbfbf9',
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
      backgroundImage: {
        'brick-pattern': "url('/egs-tailwind/layouts/images/bw-wall.png')",
        'footer-texture': "url('/egs-tailwind/layouts/images/footer-background.jpg')",
        'footer-img': "url('/egs-tailwind/layouts/images/house-drawing.svg')",
      }, 
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
}

