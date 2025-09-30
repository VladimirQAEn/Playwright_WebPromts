import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
    //go to url
    await page.goto('https://www.youtube.com/');

    //visible, editable, enabled, empty
    const searchBox = page.getByPlaceholder('Search', { exact: true }).first();
    await expect(searchBox).toBeVisible();
    await expect(searchBox).toBeEditable();
    await expect(searchBox).toBeEnabled();
    await expect(searchBox).toBeEmpty();

    //varify url, title, text, count
    // await page.getByPlaceholder('Search', { exact: true }).first().fill('Playwright Automation Using TypeScript');
    // await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');

    // await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScript');
    // await expect(page).toHaveTitle('Playwright Automation Using TypeScriptYouTube');
    // await expect(page.locator('span[id="description-text"]').first()).toHaveText('PSimple connection in a couple of minutes. Online traffic analysis in your personal cabinet');





    // verify url, title, text, count
    // await searchBox.fill('Playwright Automation Using TypeScript');
    // await searchBox.press('Enter');

    // await expect(page).toHaveURL(/search_query=Playwright\+Automation\+Using\+TypeScript/);
    // await expect(page).toHaveTitle(/Playwright Automation Using TypeScript/i);

    // // Ожидание появления результатов поиска
    // await page.waitForSelector('span[id="description-text"]', { timeout: 10000 });

    // // Проверка наличия хотя бы одного description
    // const descriptions = page.locator('span[id="description-text"]');
    // await expect(descriptions.first()).toBeVisible();


}); 