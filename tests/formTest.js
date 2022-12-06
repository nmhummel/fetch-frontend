import { test, expect } from '@playwright/test';

test('homepage loads with blank fields', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Fetch FrontEnd Assessment/);

  
  page.getByPlaceholder('Full Name');
  page.getByPlaceholder('Email Address');
  page.getByPlaceholder('Password*');

});

test('something', async ({ page }) => {
    const getStarted =  page.getByPlaceholder('Full Name');

    await getStarted.click();

    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill('nmhummel');

    await page.locator('#occupation').selectOption('Entry-level Seat Recliner');

    await page.getByRole('button', { name: 'SUBMIT' }).click();
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Password*').fill('');
    await page.locator('svg').click();
    await page.locator('path').click();
    await page.locator('#state').selectOption('Kansas');
    await page.getByRole('button', { name: 'SUBMIT' }).click();
    await page.getByPlaceholder('Password*').click();
    await page.getByPlaceholder('Password*').fill('Scampy13!!!');
    await page.getByRole('button', { name: 'SUBMIT' }).click();
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill('nmhummel@gmail.com');
    await page.getByRole('button', { name: 'SUBMIT' }).click();
    await page.getByRole('img', { name: 'footer info' }).click();
});

test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
});