import { devices, type PlaywrightTestConfig } from 'playwright/test';

const config: PlaywrightTestConfig = {
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

		{
      name: 'Mobile Landscape',
      use: {
        ...devices['iPhone 15 Pro Max landscape'],
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
};

export default config;
