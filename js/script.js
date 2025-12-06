/**
 * Toggles the visibility of the mobile menu.
 * It checks for the existence of the 'mobile-menu' element and toggles the 'hidden' class.
 * @returns {void}
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

/**
 * Closes the mobile menu if it is currently open.
 * It checks if the 'mobile-menu' element is not hidden, and if so, adds the 'hidden' class.
 * @returns {void}
 */
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

/**
 * Initializes the event listeners for the navigation menu.
 * Sets up the toggle button click event and adds click listeners to all navigation links
 * to ensure the mobile menu closes when a link is clicked.
 * @returns {void}
 */
function initMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    const links = document.querySelectorAll('#mobile-menu a, #nav-links a');
    links.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Initialize the menu when the DOM is fully loaded to ensure elements exist.
document.addEventListener('DOMContentLoaded', initMenu);
