        import { test, expect } from '@playwright/test';

        test('Drag and drop within an iframe', async ({ page }) => {
            await page.goto('https://jqueryui.com/droppable/');

            const iframe = await page.frameLocator('[class="demo-frame"]');

            //drag and drop elements
            const dragElement = iframe.locator('[id="draggable"]');
            const dropElement = iframe.locator('[id="droppable"]');

            await dragElement.dragTo(dropElement);

            //assertion
            await expect(dropElement).toHaveText('Dropped!');


        });
