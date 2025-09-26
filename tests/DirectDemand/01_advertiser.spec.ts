    import { test, expect } from '@playwright/test';

    test('CheckDefaultElements', async ({ page }) => {
      
        //log in
        await page.goto('https://identity-ui-qa.stacksandbox.com/?white_label_name=platform-qa.admixer.net&redirect_url=https:%2F%2Fplatform-qa.admixer.net%2F%3Fnavigate%3D%2F&client_id=UI');
        await page.getByRole('textbox', { name: 'Your Email Your password' }).click();
        await page.getByRole('textbox', { name: 'Your Email Your password' }).fill('TD_AutoTest@test');
        await page.getByRole('textbox', { name: 'Password', exact: true }).click();
        await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Vahtang9935');
        await page.getByRole('button', { name: 'Login' }).click();

        // go to advertisers list page
        await page.locator('.mat-icon').first().click();
        await page.getByRole('link', { name: 'Advertisers' }).click();

        // Check default elements        
        const columnName = page.locator('//*[@data-qa="adv_list_colum_name_advertiserName"]//div[1]/div[1]');

        await expect(columnName).toHaveText('Name');

    });


