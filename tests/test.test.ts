import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/RodrigoDeLemosGrooming/', { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => document.fonts.ready);
  });

  test('renders key content across aspect ratios', async ({ page }) => {
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
  });
});
