    import { test, expect } from '@playwright/test';

    test('Handling alerts and popups', async ({ page }) => {
      
    //go to url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Dialog type is: ${dialog.type()}`)
        console.log(`Alert message: ${dialog.message()}`)
    });

    await page.getByText('See an example alert', {exact: true} ).click();

    });

    test('Handling popups', async ({ page }) => {
      
    //go to url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        dialog.dismiss();
        console.log(`Dialog type is: ${dialog.type()}`)
        console.log(`Popup message: ${dialog.message()}`)
    });

    await page.getByText('See a sample confirm', {exact: true} ).click();

    });

    test('Handling promts', async ({ page }) => {
      
    //go to url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async(dialog) => {
        console.log(`Dialog type is: ${dialog.type()}`)
        console.log(`Prompt message: ${dialog.message()}`)
        await dialog.accept('Yes, I am from Playwright');
    });

    await page.getByText('See a sample prompt', {exact: true} ).click();

    });
1
1