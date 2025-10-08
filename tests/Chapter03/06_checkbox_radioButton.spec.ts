import { test, expect } from '@playwright/test';

test('Checkbox_radioButton', async ({ page }) => {
    //go to url
    await page.goto('https://jqueryui.com/checkboxradio/');
    
    const iframe = page.frameLocator('[class="demo-frame"]');

    //check not selected
    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
    
    //select radio button
    await iframe.locator('[for="radio-1"]').check();

    //check selected
    await expect(iframe.locator('[for="radio-1"]')).toBeChecked();

}); 