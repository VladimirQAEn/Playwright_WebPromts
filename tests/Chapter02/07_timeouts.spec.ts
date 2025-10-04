import { test, expect } from '@playwright/test';

test('Timeouts', async ({ page }) => {
    
    test.setTimeout(1 * 60 * 1000); // 1 minutes
    //go to url
    await page.goto('https://dou.ua/');

    //double click mouth
    await page.getByRole('link', { name: 'Стрічка' }).first().dblclick(), { timeout: 20 * 1000 }; // 20 seconds

    // await page.waitForTimeout(20000); // 20 seconds


}); 