import { Page, test } from '@playwright/test';
import {getText, type} from '../Reusable_Actions';



let page: Page;

test.beforeAll( async ({browser}) =>{
    page = await browser.newPage();
});

test('search for playwright keyword on bing', async ({}) => {
    await page.goto('https://www.bing.com');
    await page.waitForTimeout(3000);//wait for few seconds
    await type(page, '[name="q"]', 'Playwright', 'Search Box');
    await page.keyboard.press('Enter'); // hit enter after typing
});

test('capture the search number on bing for playwright keyword', async ({}) => {
    let searchResult = await getText(page, 'span[class="sb_count"]', 'Search Result Text');
    console.log("Search result is: " + searchResult);
    let searchNumber = searchResult.split(' ');
    console.log("Search number is: " + searchNumber[1]);
});
