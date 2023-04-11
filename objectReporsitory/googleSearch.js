const obj = require('../main/web/base.js');
const verify = require('../main/web/verify.js');
const google = require('./googelSearchLocators.js');
const cli = require('../main/web/mouse.js');


export async function enterTextAtSearchBox(page, text) {
    await obj.fillText(page, google.googleSearchBox, text);
}

export async function getSearchButtonText(page) {
    return await obj.getText(page, google.googleSearchbutton);
}

export async function verifyLearnTextisEqualTo(page, textToVerify) {
    await verify.verifyTextisEqualTo(page, google.googleSearchbutton, textToVerify); 
}

export async function clickOnLearnButton(page) {
    await cli.clickOnButton(page, google.googleSearchbutton);
}

export async function clickOnContactUsButton(page) {
    await cli.clickOnButton(page, google.contactUsButton);
}

export async function enterTextAtFirstName(page, text) {
    await obj.fillText(page, google.firstName, text);
}

export async function clickOnFirstNameButton(page) {
    await cli.clickOnButton(page, google.firstName);
}

module.exports = {
    enterTextAtSearchBox,
    getSearchButtonText,
    verifyLearnTextisEqualTo,
    clickOnLearnButton,
    clickOnContactUsButton,
    enterTextAtFirstName,
    clickOnFirstNameButton
};