/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            backgroundImage: {
                pattern: "url('/src/assets/pattern-bg.png')"
            },
            fontFamily: {
                sans: 'Rubik, sans-serif'
            },
            colors: {
                gray: {
                    900: 'hsl(0, 0%, 17%)',
                    400: 'hsl(0, 0%, 59%)'
                }
            }
        },
    },
    plugins: [],
}