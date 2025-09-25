const { test as base } = require('@playwright/test');
const { chromium } = require('playwright');

const test = base.extend({
    page: async ({ }, use) => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({
            recordVideo: {
                dir: 'test-results/videos/',
                size: { width: 640, height: 480 },
            }
        });
        const page = await context.newPage();

        // Make page globally available (for existing step definitions)
        global.page = page;

        await use(page);

        await context.close();
        await browser.close();
    },
});

module.exports = { test };