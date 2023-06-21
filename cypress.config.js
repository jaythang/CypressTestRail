const { defineConfig } = require('cypress');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  reporter: "cypress-testrail-reporter",
  "reporterOptions": {
    "host": "my-company.testrail.io",
    "username": "thang.jay@gmail.com",
    "password": "wsmM0e2Sv0B9JjClvKSd-XV9P7F0/2qjNVg5oj7kJ",
    "projectId": 1,
    "suiteId": 1,
    "screenshots": true
},
  e2e: {
    async setupNodeEvents(on, config) {
         require('cypress-mochawesome-reporter/plugin')(on);
        const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
        });

        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);

        return config;
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);

        return config;
        
      // implement node event listeners here
    },

    
      "reporter": "cypress-testrail-reporter",
      
    
        
   

        

     

    // https://github.com/bahmutov/cypress-testrail-simple
    

        
      // implement node event listeners here
    


    // cypress/plugins/index.js


    
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://onepitch.co/",
    chromeWebSecurity: false,
   
  },
});
