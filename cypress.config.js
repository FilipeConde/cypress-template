const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/integration/**/*.{feature, features}',
    watchForFileChanges: false,
    video: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  },
});
