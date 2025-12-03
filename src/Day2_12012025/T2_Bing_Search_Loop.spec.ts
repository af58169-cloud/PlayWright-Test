import { test, expect} from "@playwright/test";

test('Search for a keyword on bing @smoke', async ({page}) =>{

   //declare arraylist for cars
    //let cars: string[] = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'];
    let cars = new Array<string>()
    cars.push('Toyota')
    cars.push('Honda')
    cars.push('Ford')
    cars.push('BMW')
    cars.push('Mercedes')
for(let i=0; i<cars.length; i++){
        //navigate to bing
        await page.goto('https://www.bing.com/');
        //type a keyword in the search box
        await page.locator('[name="q"]').fill(cars[i])
        await page.waitForTimeout(2000) //wait for few seconds for the next step
        //submit on the search field
        await page.keyboard.press('Enter')
        //capture search results text
        let searchResults = await page.locator('[class="sb_count"]').textContent() //you can also use .innerText()
        //for concatenation purpose, you either can use comma , or +
        console.log('Search Results: ', searchResults)
        //extract number from the text
        let resultsArray = searchResults?.split(' ')
        console.log('for cars ' + cars[i] + ': ', resultsArray?.[1])
    }//end of for loop 

});