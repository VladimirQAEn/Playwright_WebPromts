import { test, expect } from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {
    //go to url
    await page.goto('https://www.google.com/');

    // //Enter action from keyboard
    // await page.getByLabel('Пошук', { exact: true }).first().fill('playwright by testers talk');
    // await page.getByLabel('Пошук', { exact: true }).first().press('Enter');

    // await page.waitForTimeout(3000);

    // //Selecting & Deleting from keyboard
    // await page.getByLabel('Пошук', { exact: true }).first().click();
    // await page.keyboard.press('Control+A'); 
    // await page.keyboard.press('Delete');

    //press tab&enter
    await page.getByLabel('Пошук', { exact: true }).first().click();
    await page.keyboard.press('Tab'); 
    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);


});