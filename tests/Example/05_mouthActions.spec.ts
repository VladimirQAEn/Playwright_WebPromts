import { test, expect } from '@playwright/test';

test('Mouth Actions', async ({ page }) => {
    //go to url
    await page.goto('https://dou.ua/');

    // //mouth actions left click
    // await page.getByRole('link', { name: 'Форум' }).first().click({ button: 'left'});

    // //mouth actions right click
    // await page.getByRole('link', { name: 'Форум' }).first().click({ button: 'right'});

    //mouth hover
    await page.getByLabel('DOU Logo').hover();

    //double click mouth
    await page.getByRole('link', { name: 'Стрічка' }).first().dblclick();

    await page.waitForTimeout(3000);


});