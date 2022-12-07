import { test, expect } from '@playwright/test';

test('homepage loads with blank fields', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Fetch FrontEnd Assessment/);

  const name = page.locator('#name');
  const email = page.locator('#email');
  const password = page.locator('#password');
  const occupation = page.locator('#occupation');
  const stateName = page.locator('#state');
  await expect(name, email, password, occupation, stateName).toBeVisible();
  
});

