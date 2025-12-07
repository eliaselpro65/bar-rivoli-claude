/**
 * Toggles the visibility of the mobile menu with smooth transition.
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

/**
 * Lightbox functionality for image gallery
 */
function initLightbox() {
    // Create lightbox HTML if it doesn't exist
    if (!document.getElementById('lightbox')) {
        const lightboxHTML = `
            <div id="lightbox">
                <span class="close-lightbox">&times;</span>
                <img src="" alt="Lightbox Image" id="lightbox-img">
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    // Add click handlers to all gallery images
    document.querySelectorAll('.gallery-clickable').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (lightbox.classList.contains('active') && e.key === 'Escape') {
            closeLightbox();
        }
    });
}

/**
 * Intersection Observer for fade-in animations on scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.fade-in-section').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Smooth scroll enhancement
 */
function enhanceSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Initialize all functions when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initLightbox();
    initScrollAnimations();
    enhanceSmoothScroll();
});
