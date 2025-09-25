module.exports = {
    paths: ['features/**/*.feature'],
    require: ['step_definitions/**/*.js'],
    format: ['html:support/reports/bddgen-report.html'],
    formatOptions: { snippetInterface: 'async-await' },
    parallel: 1,
    publishQuiet: true
};