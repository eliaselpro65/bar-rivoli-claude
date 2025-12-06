from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the index page locally
        page.goto("file:///app/index.html")

        # Screenshot the top of the page (Hero + Nav)
        page.screenshot(path="verification/index_hero.png")
        print("Screenshot of index hero saved.")

        # Scroll to About Us and screenshot
        page.locator("#nosotros").scroll_into_view_if_needed()
        page.screenshot(path="verification/index_about.png")
        print("Screenshot of index about saved.")

        # Scroll to Pinchos and screenshot
        page.locator("#pinchos").scroll_into_view_if_needed()
        page.screenshot(path="verification/index_pinchos.png")
        print("Screenshot of index pinchos saved.")

        # Click on "Ver Todos Los Pinchos" to navigate to pinchos.html
        with page.expect_navigation():
            page.get_by_role("link", name="Ver Todos Los Pinchos").click()

        # Screenshot the pinchos page
        page.screenshot(path="verification/pinchos_page.png")
        print("Screenshot of pinchos page saved.")

        browser.close()

if __name__ == "__main__":
    verify_changes()
