import { test, expect } from '@playwright/test';

test('Iterating matching elements', async ({ page }) => {
    //go to url
    await page.goto('https://github.com/bakkappan');
    
    const repositoryLinks = await page.$$('.repo');
    for (const repositoryLink of repositoryLinks) {
        const text = await repositoryLink.textContent();
        console.log(`Text from 1st loop: ${text}`);
    }

    console.log('=============================');

    for (let index = 0; index < repositoryLinks.length; index++) {
        const text = await repositoryLinks[index].textContent();
        console.log(`Text from 2nd loop:[${index}] ${text}`);
    }

    console.log('=============================');

    const repositoryLinks2 = await page.locator('.repo');
    const count = await repositoryLinks2.count();
    for (let index = 0; index < count; index++) {
        const text = await repositoryLinks2.nth(index).textContent();
        console.log(`Text from 3rd loop: ${text}`);
    }

}); 