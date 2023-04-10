import { test, expect } from '@playwright/test';

export async function verifyTextisEqualTo(page, element, textToVerify) {
    await expect(page.locator(element)).toHaveText(textToVerify);
}

export async function verifyTextisNotEqualTo(page, element, textToVerify) {
    await expect(page.locator(element)).toHaveText(textToVerify);
}

export async function verifyElementIsChecked(page, element) {
    await expect(page.locator(element)).toBeChecked();
}

export async function verifyElementIsDisabled(page, element) {
    await expect(page.locator(element)).toBeDisabled();
}

export async function verifyElementIsEdtable(page, element) {
    await expect(page.locator(element)).toBeEditable();
}

export async function verifyElementIsEmpty(page, element) {
    await expect(page.locator(element)).toBeEmpty();
}

export async function verifyElementIsEnabled(page, element) {
    await expect(page.locator(element)).toBeEnabled();
}

export async function verifyElementIsFocussed(page, element) {
    await expect(page.locator(element)).toBeFocused();
}

export async function verifyElementViewport(page = null) {
    if (page !== null) {
    await expect(page.locator(element)).toBeInViewport({num});
   }
    await expect(page.locator(element)).toBeInViewport();
}

export async function verifyElementIsVisible(page, element) {
    await expect(page.locator(element)).toBeVisible();
}

export async function verifyElementHasValue(page, element, textToVerify) {
    await expect(page.locator(element)).toHaveValue(textToVerify);
}

module.exports = {
    verifyTextisEqualTo,
    verifyElementIsChecked,
    verifyElementIsDisabled,
    verifyElementIsEdtable,
    verifyElementIsEmpty,
    verifyElementIsEnabled,
    verifyElementIsFocussed,
    verifyElementViewport,
    verifyElementIsVisible,
    verifyElementHasValue,
    verifyTextisNotEqualTo
};
