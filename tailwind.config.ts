import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            dropShadow: {
                lightShadow: '0px 0px 30px rgb(255, 255, 255, 0.3)',
            },
            colors: {
                'panel-color': 'rgb(16, 16, 22)',
                'secondary-panel-color': 'rgb(28, 28, 39)',
            },
            boxShadow: {
                whiteBox: '0px 0px 20px rgb(255, 255, 255, 0.1)',
            },
            keyframes: {
                levitate: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              },
              animation: {
                levitate: 'levitate 2s ease-in-out infinite',
              },
        },
    },
    plugins: [require('@xpd/tailwind-3dtransforms')],
};
export default config;
