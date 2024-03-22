const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
    addCucumberPreprocessorPlugin,

    afterRunHandler,
} = require('@badeball/cypress-cucumber-preprocessor');

const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const fs = require('fs');
const setupNodeEvents = async (on, config) => {
    await addCucumberPreprocessorPlugin(on, config, {
        omitAfterRunHandler: true,
    });
    allureWriter(on, config);
    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        }),
    );
    on('after:run', async (results) => {
        if (results) {
            await afterRunHandler(config);
            fs.writeFileSync(
                'cypress/reports/results.json',
                JSON.stringify(
                    {
                        browserName: results.browserName,
                        browserVersion: results.browserVersion,
                        osName: results.osName,
                        osVersion: results.osVersion,
                        nodeVersion: results.config.resolvedNodeVersion,
                        cypressVersion: results.cypressVersion,
                        startedTestsAt: results.startedTestsAt,
                        endedTestsAt: results.endedTestsAt,
                    },
                    null,
                    '\t',
                ),
            );
        }
    });
    return config;
};
module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://mybiat-corporate-web-backbase-application-rec2.apps.ocp-uat.biat.int/en/AccountsAndCards/ManageAccount/AccountsList',
        fixturesFolder: false,
        responseTimeout: 5000,
        specPattern: '**/*.feature',
        supportFile: false,
        video: false,
        experimentalInteractiveRunEvents: true,
        chromeWebSecurity: false,
        setupNodeEvents,
    },
    env: {
        API_USERNAME: 'Stage.PFE',
        API_PASSWORD: 'ValueBIAT.24',
        API_URL: 'http://mybiat-corporate-web-backbase-application-rec2.apps.ocp-uat.biat.int/api/',
        API_TOKEN_URL: 'http://backbase-identity-rec2.apps.ocp-uat.biat.int/auth/realms/biat-corporate/protocol/openid-connect/token'
    },

});



