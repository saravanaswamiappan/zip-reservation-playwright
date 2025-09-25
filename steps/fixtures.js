const { test } = require('@playwright/test');
const { chromium } = require('playwright');

const customTest = test.extend({
    page: async ({ }, use) => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({
            recordVideo: {
                dir: 'test-results/videos/',
                size: { width: 640, height: 480 },
            }
        });
        const page = await context.newPage();
   
        global.page = page;

        await use(page);

        await context.close();
        await browser.close();
    },
});

module.exports = { test: customTest };