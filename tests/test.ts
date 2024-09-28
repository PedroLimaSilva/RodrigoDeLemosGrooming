import { expect, test } from 'playwright/test';

test('Homepage renders in multiple aspect ratios', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot({ fullPage: true });
});
