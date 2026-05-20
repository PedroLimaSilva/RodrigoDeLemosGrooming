import { expect, test } from 'playwright/test';

test('Homepage renders in multiple aspect ratios', async ({ page }) => {
  // Full-page screenshots run before scroll; [data-reveal] blocks stay at opacity 0 unless
  // they intersect the viewport. Match reduced-motion behavior so all sections are visible
  // without relying on scroll or transition timing.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/RodrigoDeLemosGrooming/');
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('Mobile primary nav open uses viewport screenshot', async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name === 'chromium',
    'Collapsed header menu is only available below the mobile nav breakpoint.',
  );

  await page.setViewportSize({ width: 390, height: 640 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/RodrigoDeLemosGrooming/');
  await page.locator('[data-header-menu-toggle]').click();
  await expect(page.locator('[data-header-menu-toggle]')).toHaveAttribute('aria-expanded', 'true');

  // Viewport-only capture (not fullPage) documents the overlay without scrolling the document.
  await expect(page).toHaveScreenshot({ fullPage: false });
});
