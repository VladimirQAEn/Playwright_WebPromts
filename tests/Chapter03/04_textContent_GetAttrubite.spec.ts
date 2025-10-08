import { test, expect } from '@playwright/test';

test('Text Content - Get Attribute', async ({ page }) => {
    //go to url
    await page.goto('https://github.com/bakkappan');
    
    const name = await page.locator('[itemprop="name"]').textContent();
    const finalName = name?.trim();
    
    console.log(`Name is: ${name}`);
    
    expect(finalName).toBe('Testers Talk');

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute Value is: ${attributeValue}`);
}); 