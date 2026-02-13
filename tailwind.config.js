/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#38bdf8',
          soft: 'rgba(56, 189, 248, 0.12)',
        },
        surface: {
          DEFAULT: '#020617',
          alt: '#020617',
        },
        text: {
          DEFAULT: '#e5e7eb',
          muted: '#9ca3af',
        },
        badge: '#22c55e',
      },
      borderRadius: {
        lg: '16px',
        md: '10px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.8)',
        card: '0 14px 30px rgba(15, 23, 42, 0.7)',
      },
    },
  },
  plugins: [],
};
