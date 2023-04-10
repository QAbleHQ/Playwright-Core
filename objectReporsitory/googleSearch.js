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

module.exports = {
    enterTextAtSearchBox,
    getSearchButtonText,
    verifyLearnTextisEqualTo,
    clickOnLearnButton
};