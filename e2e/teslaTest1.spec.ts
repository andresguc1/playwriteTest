import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.tesla.com/");
  await page
    .locator("div")
    .filter({ hasText: /^United StatesEnglish$/ })
    .getByRole("link")
    .click();
  await page
    .locator("#mega-menu")
    .getByRole("heading", { name: "Model S" })
    .click();
  await page.getByRole("link", { name: "Model S" }).click();
  await page
    .locator("#tesla-gallery-advanced-11835")
    .getByRole("link", { name: "Compare Models" })
    .click();
  await page.getByLabel("Select Model").nth(1).selectOption("mx_long-range");
});
