import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Full Name').dblclick();
  await page.getByPlaceholder('Full Name').fill('Natalie Hummel');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('nmhummel');
  await page.locator('#occupation').selectOption('Entry-level Seat Recliner');
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Password*').click();
  await page.getByPlaceholder('Password*').fill('gheue');
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