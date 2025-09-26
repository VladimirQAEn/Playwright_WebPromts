        import { test, expect } from '@playwright/test';

        test.beforeEach(async({ page }) => {

        //log in
        await page.goto('https://www.facebook.com/');

    });

        test('Handling dropdown list in Playwright', async ({ page }) => {

            await page.getByRole('button', { name: 'Create new account' }).click();

            //select dropdown using value
            await page.getByLabel('Month').selectOption('5');

            //select dropdown using visible text
            await page.getByLabel('Month').selectOption({ label: 'Aug' });

            //validate all the options 
            await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

        });
