import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  expect: {
    timeout: 30_000,
  },

  use: {
    trace: 'on-first-retry',
    viewport: { width: 1366, height: 768 },
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});