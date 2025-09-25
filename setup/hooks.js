const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('playwright-bdd');

setDefaultTimeout(60000);

BeforeAll(async function () {
    console.log('Starting bddgen test suite...');
});

Before({ tags: '@bddgen' }, async function (scenario) {
    console.log(`Starting bddgen scenario: ${scenario.pickle.name}`);
    this.scenarioName = scenario.pickle.name;
    await this.init();
});

After({ tags: '@bddgen' }, async function (scenario) {
    if (scenario.result.status === 'FAILED') {
        const screenshot = await this.page.screenshot();
        this.attach(screenshot, 'image/png');
    }
    await this.cleanup();
});