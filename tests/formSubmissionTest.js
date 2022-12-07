import { test } from '@playwright/test';

test('sample run through of form entry and submission', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Password*').click();
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByText('Make sure your password contains a minimum of eight characters, at least one upp').click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Tester McGee');
  await page.getByPlaceholder('Full Name').press('Tab');
  await page.getByPlaceholder('Email Address').fill('tester@');
  await page.locator('#occupation').selectOption('Chief Frolicker (Jolly)');
  await page.locator('#state').selectOption('Georgia');
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.locator('#emptyFields').click();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('tester@gmail.com');
  await page.getByPlaceholder('Email Address').press('Tab');
  await page.getByPlaceholder('Password*').fill('Testing123!');
  await page.locator('#eyeIcon').click();
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByText('Your application has been submitted!').click();
});