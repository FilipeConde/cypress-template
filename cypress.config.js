const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.{feature, features}',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  },
});
