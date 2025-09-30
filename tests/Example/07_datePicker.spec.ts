import { test, expect } from '@playwright/test';

test('Selecting date values', async ({ page }) => {
    //go to url
    await page.goto('https://jqueryui.com/datepicker/');

    //Harcoded date
    const iframe = await page.frameLocator('[class="demo-frame"]');
    // await iframe.locator('[id="datepicker"]').fill('02/15/2024');

    await page.waitForTimeout(3000);

    //selecting dynamic date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker-today').click();

    //selecting past date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Prev"]').click();
    await iframe.locator('text="15"').click();

    //selecting future date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="15"').click();
    

});