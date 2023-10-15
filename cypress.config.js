const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
e2e: {
async setupNodeEvents(on, config) {
const bundler = createBundler({
plugins: [createEsbuildPlugin(config)],
});

on("file:preprocessor", bundler);
await addCucumberPreprocessorPlugin(on, config);

return config;
},
specPattern: "cypress/e2e/features/*.feature",
baseUrl: "https://demo2-accounts.nagwa.com",
students_baseUrl: "https://test-students.nagwa.com/",
env: {
    local: 'en-US'
}
}, 
});
