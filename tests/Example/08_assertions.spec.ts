import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
    //go to url
    await page.goto('https://www.youtube.com/');

    //visible, editable, enabled, empty
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty();


}); 