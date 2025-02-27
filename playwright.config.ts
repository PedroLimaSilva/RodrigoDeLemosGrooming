import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	expect: {
		toHaveScreenshot: { maxDiffPixels: 0 }
	},
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Mobile Safari Small',
      use: {
        ...devices['iPhone 13'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 15 Pro Max'],
      },
    },
  ],
	updateSnapshots: 'missing',
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
});
