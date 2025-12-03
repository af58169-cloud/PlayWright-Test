import { Page, test} from '@playwright/test';

//initialize page variable for browser
let page: Page
let value: string
let integer: number

test.beforeAll(async ({ browser }) => {
    //create a new page instance
    page = await browser.newPage()
})

test('Search for a keyword on bing @smoke', async () =>{
    //navigate to bing
    await page.goto('https:/www.bing.com/')
    //type a keyword in the search box
    await page.locator('[name="q"]').fill('playwright Testing')
     await page.waitForTimeout(2000) //wait for few seconds for the next step
    //click on the search icon
    await page.keyboard.press('Enter')
});//end of test 1

test('Capture search', async() => {
    //capture search result text 
    let searchResults = await page.locator('[class="sb_count"]').textContent() //you can
    //for concatenation purpose, you either can use comma , or +
    console.log('Search results: ', searchResults)
    //extract number from the text 
    let resultsArray = searchResults.split(' ')
    console.log('Results Array: ', resultsArray[1])
});//end of test 2