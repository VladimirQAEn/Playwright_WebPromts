import { test, expect } from '@playwright/test';

test.describe('Smoke Testing', () => {

    test('Test 1', async ({ page }) => {
    //go to url
    await page.goto('https://www.youtube.com/');
    const searchBox = page.getByPlaceholder('Search', { exact: true }).first();

    //varify url, title, text, count
    await searchBox.fill('Playwright Automation Using TypeScript');
    await searchBox.press('Enter');
    
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScript');
    });
}); 

test.describe('Regression Testing', () => {    

    test('Test 2', async ({ page }) => {
       //go to url
       await page.goto('https://www.youtube.com/');
    const searchBox = page.getByPlaceholder('Search', { exact: true }).first();

    //varify url, title, text, count
    await searchBox.fill('Playwright Automation Using TypeScript');
    await searchBox.press('Enter');
    
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScript');
    });

    test('Test 3', async ({ page }) => {
    //go to url
    await page.goto('https://www.youtube.com/');
    const searchBox = page.getByPlaceholder('Search', { exact: true }).first();

    //varify url, title, text, count
    await searchBox.fill('Playwright Automation Using TypeScript');
    await searchBox.press('Enter');
    
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScript');
    });

}); 



