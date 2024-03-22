
const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
import "@shelex/cypress-allure-plugin";
module.exports = (on, config) => {
    on('file:preprocessor', cucumber());
    allureWriter(on, config);
};