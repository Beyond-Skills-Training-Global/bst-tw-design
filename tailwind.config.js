// const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./wwwroot/**/*.{html,js}"],
    theme: {
        extend: {
            width: {
                "0.1": "1px",
            },
            fontFamily: {
                'sarpanch': ['Sarpanch', 'sans-serif'],
                'orbitron': ['Orbitron', 'sans-serif'],
                'michroma': ['Michroma', 'sans-serif'],
                'noto': ['Noto Emoji', 'sans-serif']
            },
            backgroundImage: theme => ({
                // 'img': "url('https://i.imgur.com/zGInYLg.png')",
                // 'icon': "url('https://i.imgur.com/AlIdvzx.png')",
                // 'img2': "url('https://i.imgur.com/T1wN7yx.jpg')",
                // 'boxer': "url('https://i.imgur.com/X3UfjBq.jpg')",
                // 'lion': "url('https://i.imgur.com/9gOEvIN.png')",
                gradient: 'linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(51,51,51,.8) 40%, rgba(51,51,51,.6) 60%, rgba(0,0,0,0) 100%)',
            }),
            colors: {
                neutral: {
                    750: '#333333',
                },
                gold: {
                    DEFAULT: '#EEBA2B',
                    50: '#ffec5d',
                    100: '#ffe253',
                    200: '#ffd849',
                    300: '#ffce3f',
                    400: '#f8c435',
                    500: '#eeba2b',
                    600: '#fbb03b',
                    700: '#daa617',
                    800: '#d09c0d',
                    900: '#c69203',
                },
            },
        },
    },
    variants: {},
    plugins: [],
}