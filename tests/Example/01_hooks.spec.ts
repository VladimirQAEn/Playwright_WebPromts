    import { test, expect } from '@playwright/test';


    test.beforeEach(async({ page }) => {

        //log in
        await page.goto('https://platform-qa.admixer.net/');
        await page.getByRole('textbox', { name: 'Your Email Your password' }).click();
        await page.getByRole('textbox', { name: 'Your Email Your password' }).fill('TD_AutoTest@test');
        await page.getByRole('textbox', { name: 'Password', exact: true }).click();
        await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Vahtang9935');
        await page.getByRole('button', { name: 'Login' }).click();

        // go to advertisers list page
        await page.locator('.mat-icon').first().click();
        await page.getByRole('link', { name: 'Advertisers' }).click();
    });

    test('Test_1', async ({ page }) => {
      
        //getByRole    
        await page.getByRole('button', { name: 'Select Filters' }).click();

    });

    test('Test_2', async ({ page }) => {

        //placaholder
        await page.getByPlaceholder('Search by Name').click();
        await page.getByPlaceholder('Search by Name').fill('TestAdvertiserAT');


    });
