import { test, expect } from "@playwright/test";

test("test main page", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.setViewportSize({ width: 1275, height: 768 });

  const openMenuIcon = page.getByTestId("open-menu-icon");
  const closeMenuIcon = page.getByTestId("close-menu-icon");

  await expect(openMenuIcon).toBeVisible();
  await expect(closeMenuIcon).not.toBeVisible();
  await openMenuIcon.click();

  await expect(openMenuIcon).not.toBeVisible();
  await expect(closeMenuIcon).toBeVisible();

  await page.setViewportSize({ width: 1285, height: 768 });

  await expect(openMenuIcon).not.toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Make remote work" })
  ).toBeVisible();
});
