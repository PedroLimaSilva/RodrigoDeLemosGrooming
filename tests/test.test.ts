import { expect, test } from 'playwright/test';

test('Homepage renders in multiple aspect ratios', async ({ page }) => {
  // Full-page screenshots run before scroll; [data-reveal] blocks stay at opacity 0 unless
  // they intersect the viewport. Match reduced-motion behavior so all sections are visible
  // without relying on scroll or transition timing.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/RodrigoDeLemosGrooming/');
  await expect(page).toHaveScreenshot({ fullPage: true });
});
