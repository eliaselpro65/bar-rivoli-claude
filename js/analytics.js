/**
 * Initializes the Google Analytics data layer.
 * Checks if window.dataLayer exists, otherwise initializes it as an empty array.
 * @type {Array}
 */
window.dataLayer = window.dataLayer || [];

/**
 * Global function to push events and configuration to Google Tag Manager.
 * It processes arguments by pushing them to the dataLayer array.
 *
 * @param {...*} args - Variable number of arguments to be tracked.
 *                      Commonly used for commands like 'config', 'event', etc.
 * @returns {void}
 */
function gtag(){
    dataLayer.push(arguments);
}

// Record the current timestamp for the initialization
gtag('js', new Date());

// Configure the Google Analytics property with the tracking ID.
// Note: Replace 'G-TU_ID_DE_GOOGLE_ANALYTICS' with your actual Measurement ID.
gtag('config', 'G-TU_ID_DE_GOOGLE_ANALYTICS');
