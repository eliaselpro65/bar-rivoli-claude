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
                'verde-oscuro': '#1a4d2e',
                'verde-medio': '#2d5016',
                'verde-claro': '#4a7c59',
                'dorado': '#d4af37',
                'beige': '#f4f1e8',
                'gris': '#333333',
            },
            fontFamily: {
                serif: ['Georgia', 'serif'],
            }
        }
    }
}
