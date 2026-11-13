import { expect, test } from "@playwright/test";

test.describe("About Me page", () => {
  test("Given a visitor opens the home page, When the page loads, Then the profile name is visible", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        name: "Aleksander Wojkowski",
        level: 1,
      }),
    ).toBeVisible();
  });

  test("Given a visitor opens the home page, When the page loads, Then the About Me section is visible", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "About me" })).toBeVisible();
  });

  test("Given a visitor uses a mobile viewport, When the page loads, Then there is no horizontal overflow", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/");

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });

  test("Given a visitor uses a desktop viewport, When the page loads, Then the content has a comfortable maximum width", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const content = page.locator("main > div");
    const width = await content.evaluate(
      (element) => element.getBoundingClientRect().width,
    );

    expect(width).toBeLessThanOrEqual(768);
  });

  test("Given a very long name, When the page loads, Then the name wraps instead of overflowing", async ({
    page,
  }) => {
    await page.goto("/");

    const heading = page.getByRole("heading", {
      name: "Aleksander Wojkowski",
    });

    await expect(heading).toBeVisible();

    const dimensions = await heading.evaluate((element) => ({
      scrollWidth: element.scrollWidth,
      clientWidth: element.clientWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });

  test("Given a visitor navigates with the keyboard, When they press Tab, Then the GitHub link receives visible focus", async ({
    page,
  }) => {
    await page.goto("/");

    const githubLink = page.getByRole("link", {
      name: "Visit my GitHub profile",
    });

    await page.keyboard.press("Tab");

    await expect(githubLink).toBeFocused();
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveClass(/focus-visible:outline-2/);
  });
});
