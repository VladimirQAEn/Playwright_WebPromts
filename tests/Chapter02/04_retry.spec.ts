import { test, expect } from '@playwright/test';

test('Retry Test', async ({ page }) => {
    //go to url
    await page.goto('https://www.youtube.com/');
    const searchBox = page.getByPlaceholder('Search', { exact: true }).first();

    //varify url, title, text, count
    await searchBox.fill('Playwright Automation Using TypeScript');
    await searchBox.press('Enter');
    
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScTEst');

    //  retries: process.env.CI ? 2 : 1 in playwright.config.ts (1 повтор якщо тест не пройшов)

}); 



