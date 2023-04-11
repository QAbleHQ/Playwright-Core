import { test, mouse } from '@playwright/test';
const libs = require('../objectReporsitory/googleSearch.js');
const google = require('../objectReporsitory/googelSearchLocators.js');

test.beforeEach(async ({page}) => {
  await page.goto('/');
});

test('testGoogle', async ({page}) => {
  const page1promise = page.waitForEvent('popup');
  await libs.clickOnContactUsButton(page);
  const page1 =  await page1promise
  await libs.clickOnFirstNameButton(page1);
  await libs.enterTextAtFirstName(page1, 'Atul');
  page1.close()
  
});

test.afterEach(async ({ page }) => {
  await page.close();
});