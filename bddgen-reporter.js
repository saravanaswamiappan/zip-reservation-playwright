const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const options = {
    theme: 'bootstrap',
    jsonFile: 'support/reports/bddgen-report.json',
    output: 'support/reports/bddgen-html-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chromium",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);