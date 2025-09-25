const { createBdd } = require('playwright-bdd');

const { BeforeAll, AfterAll, BeforeScenario, AfterScenario } = createBdd();

BeforeAll(async () => {
    console.log('Starting bddgen test suite...');
});

BeforeScenario({ tags: '@bddgen' }, async ({ page }, testInfo) => {
    console.log(`Starting bddgen scenario: ${testInfo.title}`);
});

AfterScenario({ tags: '@bddgen' }, async ({ page }, testInfo) => {
    if (testInfo.status === 'failed') {
        const screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    }
});