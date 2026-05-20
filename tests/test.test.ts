import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/RodrigoDeLemosGrooming/', { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
  });

  test('renders key content and matches visual baseline', async ({ page }) => {
    await expect(page).toHaveTitle(/Dog Salon/i);

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /Refined grooming for exceptional dogs/i,
      })
    ).toBeVisible();

    await expect(page.locator('#main')).toBeVisible();
    await expect(page.locator('footer.site-footer')).toBeVisible();
    await expect(page.locator('#home .hero__btn--solid')).toHaveText(/Book appointment/i);

    await expect(page).toHaveScreenshot({ fullPage: true, animations: 'disabled' });
  });
});
