import { Page } from "@playwright/test";

//export means its resuable outside of this file

//method to click on an element
export async function click(Page:Page, Locator:string, elementName:string) {
    console.log("Clicking on "+elementName);
    await Page.locator(Locator).click();
}// end of click

//method to click on any element by index
export async function clickByIndex(Page:Page, Locator:string, index:number, elementName:string) {
    console.log("Clicking on element " +elementName);
    await Page.locator(Locator).nth(index).click();
}//end of clickElementByIndex


//method to type on any unique element
export async function type(Page:Page, Locator:string, userValue:string, elementName:string) {
    console.log("Typing on "+elementName);
    let element = Page.locator(Locator);
    await element.fill('');
    await element.fill(userValue);
}//end of type

//method to type om any element by index
export async function typeByIndex(Page:Page, Locator:string, index:number, userValue:string, elementName:string) {
    console.log("Typing on element "+elementName);
    let element = Page.locator(Locator).nth(index);
    await element.fill('');
    await element.fill(userValue);
}//end of typeByIndex

//method to get text from any unique element
export async function getText(Page:Page, Locator:string, elementName:string) {
    console.log("Getting text from "+elementName);
    let result = await Page.locator(Locator).innerText();
    return result;
}//end of getText

//method to get text from any element by index
export async function getTextByIndex(Page:Page, Locator:string, index:number, elementName:string) {
    console.log("Getting text from element "+elementName);
    let result = await Page.locator(Locator).nth(index).innerText();
    return result;
}//end of getTextByIndex

//method to select dropdown
export async function selectDropdown(Page:Page, Locator:string, optionValue:string, elementName:string) {
    console.log("Selecting value from dropdown element " + elementName);
    await Page.locator(Locator).selectOption(optionValue);
}//end of selectDropdown