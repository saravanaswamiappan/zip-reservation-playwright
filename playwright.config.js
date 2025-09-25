const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
    paths: ['features/**/*.feature'],
    require: ['step_definitions/**/*.js', 'setup/**/*.js', 'steps/**/*.js']  
});

module.exports = defineConfig({
    testDir,
    timeout: 60000,
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        trace: 'on-first-retry',
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
    ],
});