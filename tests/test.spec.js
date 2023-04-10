import { test, mouse } from '@playwright/test';
const libs = require('../objectReporsitory/googleSearch.js');
const google = require('../objectReporsitory/googelSearchLocators.js');

test.beforeEach(async ({page}) => {
  await page.goto('/');
});

test('testGoogle', async ({page}) => {
  await libs.clickOnLearnButton(page);
  // await page.locator(google.googleSearchbutton).click();
  // await libs.verifyLearnTextisEqualTo(page, 'Learn');
  
});

test.afterEach(async ({ page }) => {
  await page.close();
});