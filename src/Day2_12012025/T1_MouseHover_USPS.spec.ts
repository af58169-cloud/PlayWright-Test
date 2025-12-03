import { Page, test } from '@playwright/test';

test('mouse hover to quick tools module and select track a package @smoke', async ({ page }) => {
    //navigate to usps.com
    await page.goto('https://www.usps.com/');
    //hover to quick tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    //clcik on tracking a package link
    await page.locator('text=Track a Package').click();
    //enter a tracking number
    await page.locator('[id="tracking-input"]').fill('9400111899223847182569');
    await page.waitForTimeout(5000); //wait for few second to see it entered because of fast execution


    await page.waitForTimeout(3000); //wait for few second to see the result page
});