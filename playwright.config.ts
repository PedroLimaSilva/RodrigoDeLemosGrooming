import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  expect: {
    toHaveScreenshot: {
      // Full-page captures include text anti-aliasing; allow tiny drift so Linux CI
      // matches developer machines while still catching layout and content regressions.
      maxDiffPixelRatio: 0.002,
    },
  },
  updateSnapshots: 'missing',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Mobile Chrome Small',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 7'],
      },
    },
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --host 127.0.0.1',
    port: 4321,
  },
  testDir: 'tests',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
});
