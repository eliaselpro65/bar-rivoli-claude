# Café Bar Rivoli

This repository contains the source code for the Café Bar Rivoli website. The project is a static website built with HTML, Tailwind CSS, and vanilla JavaScript.

## Table of Contents

-   [Project Overview](#project-overview)
-   [Structure](#structure)
-   [Setup and Usage](#setup-and-usage)
-   [Customization](#customization)
    -   [Tailwind Configuration](#tailwind-configuration)
    -   [Google Analytics](#google-analytics)
-   [Documentation](#documentation)

## Project Overview

Café Bar Rivoli is a traditional bar in Soria, Spain. This website serves as a digital presence to showcase their menu, pinchos, location, and contact information. The design is responsive and mobile-friendly, utilizing Tailwind CSS for styling.

## Structure

The repository is organized as follows:

-   `index.html`: The main HTML file containing the structure and content of the website.
-   `css/`: Directory containing custom CSS styles.
    -   `styles.css`: Custom styles, including the hero section background.
-   `js/`: Directory containing JavaScript files.
    -   `script.js`: Contains the logic for the mobile menu toggle and interaction.
    -   `tailwind-config.js`: Configuration for the Tailwind CSS theme (colors, fonts).
    -   `analytics.js`: Initialization script for Google Analytics.
-   `README.md`: This documentation file.

## Setup and Usage

Since this is a static website, no build process or server installation is required to view it locally.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Open `index.html`:**
    You can open the `index.html` file directly in your web browser.

    Alternatively, you can use a simple HTTP server to serve the files. For example, if you have Python installed:
    ```bash
    python3 -m http.server
    ```
    Then navigate to `http://localhost:8000` in your browser.

## Customization

### Tailwind Configuration

The Tailwind CSS configuration is located in `js/tailwind-config.js`. You can modify the `theme` object to change the color palette or font families.

-   **Colors**: The site uses a custom color palette defined in `theme.extend.colors`.
-   **Fonts**: The site uses a serif font stack defined in `theme.extend.fontFamily.serif`.

### Google Analytics

To enable Google Analytics tracking:

1.  Open `index.html`.
2.  Locate the script tag loading `gtag/js`.
3.  Replace `G-TU_ID_DE_GOOGLE_ANALYTICS` in the `src` attribute with your actual Measurement ID.
4.  Open `js/analytics.js`.
5.  Replace `G-TU_ID_DE_GOOGLE_ANALYTICS` in the `gtag('config', ...)` call with your actual Measurement ID.

## Documentation

All source code files have been thoroughly documented with comments and docstrings.

-   **JavaScript**: Functions in `js/script.js` and `js/analytics.js` have JSDoc comments explaining their purpose, parameters, and return values.
-   **HTML**: Sections in `index.html` are commented for clarity.
-   **CSS**: `css/styles.css` includes comments explaining specific overrides.
