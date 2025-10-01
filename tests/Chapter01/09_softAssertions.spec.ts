import { test, expect } from '@playwright/test';

test('Soft Assertions', async ({ page }) => {
    //go to url
    await page.goto('https://www.youtube.com/');

    //visible, editable, enabled, empty
    const searchBox = page.getByPlaceholder('Search', { exact: true }).first();
    await expect(searchBox).toBeVisible();
    await expect(searchBox).toBeEditable();
    await expect(searchBox).toBeEnabled();
    await expect(searchBox).toBeEmpty();

    //varify url, title, text, count
    await searchBox.fill('Playwright Automation Using TypeScript');
    await searchBox.press('Enter');

    //https://prnt.sc/2Ds3WWgl0Gla  - за що відповідає soft
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+Automation+Using+TypeScript');
    await expect.soft(page).toHaveTitle('Playwright test Automation Using TypeScript - YouTube');
    await expect.soft(page.locator('span[id="description-text"]').first()).toHaveText('Simple connection in a couple of minutes. Online traffic analysis in your personal cabinet');
    
    await expect(page.locator('h3[id="video-title"]')).toHaveCount(3);
    await expect(page.locator('h3[id="video-title"]')).toBeDisabled();

}); 