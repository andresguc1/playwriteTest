import { test, expect } from "@playwright/test";

const URL = "https://www.tesla.com/";

test.beforeEach(async ({ page }) => {
  await page.goto(URL); // Navigate to the page before each test
});

test("Home Page", async ({ page }) => {
  // Click on the menu item
  const menuStart = page
    .locator("div")
    .filter({ hasText: /^United StatesEnglish$/ })
    .getByRole("link");

  // Assert the page title
  await expect(page).toHaveTitle("Electric Cars, Solar & Clean Energy | Tesla");

  await menuStart.click();

  // Verify that the model3 section is visible
  await expect(page.locator("#model3")).toBeVisible();

  // Verify that the "Order Now" link is present within the model3 section
  await expect(
    page.locator("#model3").getByRole("link", { name: "Order Now" })
  ).toBeVisible();
});

test("Model S", async ({ page }) => {
  const menuStart = page
    .locator("div")
    .filter({ hasText: /^United StatesEnglish$/ })
    .getByRole("link");

  await page.getByRole("button", { name: "Vehicles" }).click();
  await page.getByRole("link", { name: "Model S" }).click();
  await menuStart.click();
});

test("Model 3", async ({ page }) => {
  const menuStart = page
    .locator("div")
    .filter({ hasText: /^United StatesEnglish$/ })
    .getByRole("link");

  await page.getByRole("button", { name: "Vehicles" }).click();
  await page.getByRole("link", { name: "Model 3" }).click();
  await menuStart.click();
});

test("Model X", async ({ page }) => {
  const menuStart = page
    .locator("div")
    .filter({ hasText: /^United StatesEnglish$/ })
    .getByRole("link");

  await page.getByRole("button", { name: "Vehicles" }).click();
  await page.getByRole("link", { name: "Model X" }).click();
  await menuStart.click();
});

test("Model Y", async ({ page }) => {
  const menuStart = page
    .locator("div")
    .filter({ hasText: /^United StatesEnglish$/ })
    .getByRole("link");

  await page.getByRole("button", { name: "Vehicles" }).click();
  await page.getByRole("link", { name: "Model Y" }).click();
  await menuStart.click();
});
