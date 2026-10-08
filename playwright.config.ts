import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const ATTACH_SCREENSHOTS= process.env.ATTACH_SCREENSHOTS?.toLocaleLowerCase()=='true';
function resolveBaseURL(): string {
  if (process.env.BASE_URL) return process.env.BASE_URL;
  const env = (process.env.TTA_ENV || 'qa').toLowerCase();
  switch (env) {
    case 'api':
      return process.env.API_BASE_URL || 'https://demo.applitools.com/';
    case 'dev':
    case 'local':
      return process.env.DEV_BASE_URL || 'http://localhost:3000';
    case 'stg':
    case 'stage':
    case 'staging':
      return process.env.STG_BASE_URL || 'https://demo.applitools.com/';
    case 'prod':
    case 'production':
      return process.env.PROD_BASE_URL || 'https://demo.applitools.com/';
    case 'qa':
    default:
      return process.env.QA_BASE_URL || 'https://demo.applitools.com/';
  }

}
export default defineConfig({
  testDir: './src/tests',

  timeout:60_000,
  /* Run tests in files in parallel */

  expect:{
    timeout:10_000
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
reporter: [['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   baseURL: resolveBaseURL(),
   headless:false,
   screenshot:ATTACH_SCREENSHOTS ? 'only-on-failure':'off',
   video:'on',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      testDir:'./src/tests',
      testIgnore:['**/apisTests/**', '**/aiTest/**'],
      use: { ...devices['Desktop Chrome'],
        viewport:{width:1920, height:1080}
       },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
