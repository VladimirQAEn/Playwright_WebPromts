import { test, expect } from '@playwright/test';

test('Visual Test', async ({ page }) => {
    //go to url
    await page.goto('https://github.com/login');
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');


}); 

test('Element Visual Test', async ({ page }) => {
    //go to url
    await page.goto('https://github.com/login');

    const element = await page.locator('#login_field').first();
    await expect(element).toHaveScreenshot('GitHubLoginInput.png');


}); 