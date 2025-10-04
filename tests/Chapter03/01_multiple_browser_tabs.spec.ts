import { test, expect } from '@playwright/test';

test('Multiple browsers/tabs', async ({ page, browser }) => {
    //go to url
    await page.goto('https://www.youtube.com/');
    const searchBox = page.getByPlaceholder('Search', { exact: true }).first();

    await searchBox.fill('Playwright Automation Using TypeScript');
    await searchBox.press('Enter');
    
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScript');

    //new browser session
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    const searchBox2 = page2.getByPlaceholder('Search', { exact: true }).first();

    await page2.goto('https://www.youtube.com/');

    await searchBox2.fill('Playwright Automation Using TypeScript');
    await searchBox2.press('Enter');

    await page.waitForTimeout(3000);
    await expect(page2).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScript');

    //new browser tab
    const newTab = await context2.newPage();

    const searchBox3 = newTab.getByPlaceholder('Search', { exact: true }).first();

    await newTab.goto('https://www.youtube.com/');

    await searchBox3.fill('Playwright Automation Using TypeScript');
    await searchBox3.press('Enter');

    await expect(newTab).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScript');

}); 