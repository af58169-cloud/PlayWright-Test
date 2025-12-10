// filename example: tests/ww_workshop_multiple_zip.spec.ts
import { test, expect } from '@playwright/test';

test('Find WW workshop locations for multiple zip codes', async ({ page }) => {
  // same zip codes as your Java code
  const zipCodes = ['11218', '10468', '10709'];

  for (const zip of zipCodes) {
    // navigate to WeightWatchers
    await page.goto('https://www.weightwatchers.com/us/');
    await page.waitForTimeout(4000) //wait for 4 seconds

    // click on "Find a Workshop" on the top right
    await page.getByRole('link', { name:/Find a Workshop/i }).click();

    // click on "In-Person"
    await page.getByRole('button', { name: /In-Person/i }).click();

    // wait a bit for search field to be ready (Playwright will auto-wait but this is extra-safe)
    const searchField = page.locator('#location-search');
    await expect(searchField).toBeVisible();

    // clear & type zip code
    await searchField.fill(''); // clear
    await searchField.fill(zip);

    // click on search icon
    await page.click('#location-search-cta');

    // wait for results to show up (first location link)
    const firstLocationLink = page.locator('.linkUnderline-XyxpJ').first();
    await expect(firstLocationLink).toBeVisible();
    await firstLocationLink.click();

    // wait for address to be visible
    const addressLocator = page.locator('.address-FnT8k');
    await expect(addressLocator).toBeVisible();

    // capture address text
    const address = (await addressLocator.textContent())?.trim() ?? '';
    console.log(`The address for the zip code ${zip} is : ${address}`);

    // scroll to the "Upcoming In-Person Workshops" schedule section
    const scheduleHeader = page.getByText('Upcoming In-Person Workshops');
    await scheduleHeader.scrollIntoViewIfNeeded();

    // capture schedule text (same as your studioWorkshopSchedule element)
    const scheduleLocator = page.locator('#studioWorkshopSchedule');
    await expect(scheduleLocator).toBeVisible();

    const scheduleText = (await scheduleLocator.textContent())?.trim() ?? '';
    console.log(`Schedule for zip code ${zip}:\n${scheduleText}`);
  }
});
