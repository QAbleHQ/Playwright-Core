/**
 * This is a description of the fillText function
 * This is used to enter text. It requires three arguments. page, locator value and text to enter
 *
 */
export async function fillText(page, locators, text){
    await page.locator(locators).fill(text);
}

/**
 * This is a description of the fillText function
 * This is used to enter text. It requires three arguments. page, locator value and text to enter
 *
 */
export async function getText(page, locators){
    return await page.locator(locators);
}


module.exports = {
    fillText,
    getText
};