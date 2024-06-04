import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                lg: "50px",
                xl: "100px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: "Poppins, sans-serif",
            },
            colors: {
                "dark-indigo": "#081E4A",
                primary: "#0A2C55",
                secondary: "#F08F1E",
                "butter-yellow": "#1BD5BE",
                "lavender-pink": "#DF82CB",
                "persian-pink": "#DF82CA",
                "iron-grey": "#DAD5E4",
                "pastel-purple": "#A99FBD",
                "bluish-purple": "#032C35",
                "smoke-purple": "#A497BE"
            },
        },
    },

    plugins: [forms, typography],
};
