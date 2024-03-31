const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 7000,
  e2e: {
    baseUrl:'https://billygraham.org',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
