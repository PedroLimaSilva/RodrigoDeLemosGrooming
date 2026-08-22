import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/en/', { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
  });

  test('renders key content and matches visual baseline', async ({ page }) => {
    await expect(page).toHaveTitle(/Dog Groomer|Dog Salon/i);

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /Refined dog grooming in Lisbon/i,
      })
    ).toBeVisible();

    await expect(page.locator('#main')).toBeVisible();
    await expect(page.locator('footer.site-footer')).toBeVisible();
    await expect(page.locator('#home .hero__btn--solid')).toHaveText(/Book appointment/i);

    await expect(page).toHaveScreenshot({ fullPage: true, animations: 'disabled' });
  });
});

test('Mobile primary nav open uses viewport screenshot', async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name === 'chromium',
    'Collapsed header menu is only available below the mobile nav breakpoint.',
  );

  await page.setViewportSize({ width: 390, height: 640 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/en/');
  await page.locator('[data-header-menu-toggle]').click();
  await expect(page.locator('[data-header-menu-toggle]')).toHaveAttribute('aria-expanded', 'true');

  // Viewport-only capture (not fullPage) documents the overlay without scrolling the document.
  await expect(page).toHaveScreenshot({ fullPage: false });
});
