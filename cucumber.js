const common = `  
  --require setup/hooks.js 
  --require step_definitions/**/*.js
  `;

module.exports = {
  default: `${common} features/**/*.feature`
};