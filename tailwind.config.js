/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        batman: "url('../foto/batman.png')",
        capitamarvel: "url('../foto/capitamarvel.png')",
    },
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      right: 'right',
      top: 'top',
    },
  },
  plugins: [],
}

}