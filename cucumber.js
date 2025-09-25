const common = `  
  --require setup/hooks.js 
  --require step_definitions/**/*.js
  --format-options '{"snippetInterface": "async-await"}'
  --format progress-bar
  --parallel 2
  `;

module.exports = {
    default: `${common} features/**/*.feature`,
    bddgen: `${common} features/**/*.feature --tags @bddgen`,
    parallel: `${common} features/**/*.feature --parallel 4`
};