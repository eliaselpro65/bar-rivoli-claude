/**
 * Configures the Tailwind CSS theme settings.
 * This script is intended to be loaded after the Tailwind CSS CDN script.
 * It extends the default theme with custom colors and fonts for the Café Bar Rivoli brand.
 *
 * @type {Object}
 * @property {Object} theme - The theme configuration object.
 * @property {Object} theme.extend - The extensions to the default theme.
 * @property {Object} theme.extend.colors - Custom color palette.
 * @property {string} theme.extend.colors.verde-oscuro - Dark green color (#1a4d2e).
 * @property {string} theme.extend.colors.verde-medio - Medium green color (#2d5016).
 * @property {string} theme.extend.colors.verde-claro - Light green color (#4a7c59).
 * @property {string} theme.extend.colors.dorado - Gold color (#d4af37).
 * @property {string} theme.extend.colors.beige - Beige color (#f4f1e8).
 * @property {string} theme.extend.colors.gris - Grey color (#333333).
 * @property {Object} theme.extend.fontFamily - Custom font families.
 * @property {Array<string>} theme.extend.fontFamily.serif - Serif font stack (['Georgia', 'serif']).
 */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'verde-oscuro': '#0f3a26',      // Deeper, richer dark green
                'verde-medio': '#2d5016',       // Keep medium green
                'verde-claro': '#4a7c59',       // Keep light green
                'dorado': '#e8b944',            // Warmer, brighter gold
                'dorado-dark': '#d4af37',       // Original gold as darker variant
                'beige': '#f9f7f4',             // Lighter, cleaner beige
                'gris': '#2a2a2a',              // Slightly darker grey
                'accent-teal': '#2c7a6b',       // New accent color
                'cream': '#fffef9',             // New cream white
            },
            fontFamily: {
                serif: ['Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 10px 40px rgba(0, 0, 0, 0.1)',
                'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
                'glow': '0 0 20px rgba(232, 185, 68, 0.4)',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in',
                'slide-up': 'slideUp 0.6s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        }
    }
}
