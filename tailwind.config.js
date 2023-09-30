/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "landing": "url(./src/assets/landing.jpg)",
                "about": "url(./src/assets/v4.jpg)",
                "v1": "url(./src/assets/v1.jpg)",
                "pastor": "url(./src/assets/pastor.jpg)",
            },
            backgroundColor: {
                "primary": "#2F3B6D",
                "cards": "#2AF6A2",
                "clear": "rgba(0,0,0,0.6)"
            },
            colors: {
                "cards": "#2AF6A2",
                "fc": "#F2F3F6"
            },
            gridTemplateColumns: {
                "40": "40% 60%"
            },
            gridTemplateRows: {
                "40": "30% 70%"
            },
            screens: {
                "phone": "400px"
            },
            boxShadow: {
                "normal": "1px 2px 5px #333"
            },
            gridColumn: {
                "first": "1 / span 2"
            }
        },
    },
    plugins: [],
}

