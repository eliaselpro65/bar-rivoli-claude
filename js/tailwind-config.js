/**
 * Configures the Tailwind CSS theme settings.
 * This script is intended to be loaded after the Tailwind CSS CDN script.
 * It extends the default theme with custom colors and fonts for the Café Bar Rivoli brand.
 *
 * @type {Object}
 * @property {Object} theme - The theme configuration object.
 * @property {Object} theme.extend - The extensions to the default theme.
 * @property {Object} theme.extend.colors - Custom color palette.
 * @property {string} theme.extend.colors.verde-oscuro - Deep Forest Green (#0f2f20).
 * @property {string} theme.extend.colors.verde-medio - Classic Racing Green (#1a4d2e).
 * @property {string} theme.extend.colors.verde-claro - Sage Green (#4a7c59).
 * @property {string} theme.extend.colors.dorado - Muted Gold (#c5a028).
 * @property {string} theme.extend.colors.beige - Off-White/Cream (#f9f8f4).
 * @property {string} theme.extend.colors.gris - Dark Grey (#1a1a1a).
 * @property {Object} theme.extend.fontFamily - Custom font families.
 * @property {Array<string>} theme.extend.fontFamily.serif - Serif font stack (['Georgia', 'serif']).
 * @property {Array<string>} theme.extend.fontFamily.sans - Sans-serif font stack (['Helvetica Neue', 'Arial', 'sans-serif']).
 */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'verde-oscuro': '#0f2f20', // Más oscuro y elegante
                'verde-medio': '#1a4d2e',
                'verde-claro': '#4a7c59',
                'dorado': '#c5a028', // Dorado más metálico
                'beige': '#f9f8f4', // Beige más limpio
                'gris': '#1a1a1a', // Gris casi negro
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'], // Fuente más elegante para títulos
                sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'], // Fuente moderna para texto
            }
        }
    }
}
