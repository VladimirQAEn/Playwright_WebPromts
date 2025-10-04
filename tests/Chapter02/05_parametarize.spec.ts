import { test, expect } from '@playwright/test';

const searchKeywords = ['Playwright', 'Cypress', 'Selenium'];

for (const keyWord of searchKeywords) {

test(`Parametrize - ${keyWord}`, async ({ page }) => {
    //go to url
    await page.goto('https://www.youtube.com/');
    const searchBox = page.getByPlaceholder('Search', { exact: true }).first();
 
    await searchBox.fill(keyWord);
    await searchBox.press('Enter');
    
    await expect(page).toHaveURL(`https://www.youtube.com/results?search_query=${keyWord}`);


}); 

}