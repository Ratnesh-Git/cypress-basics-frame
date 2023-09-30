
Freshbooks-Automation

framework created using Cypress.io


## Installation Steps

1-Install either the entire package by running npm install cypress --save-dev or by running only- npm install cypress

## Commands

1.Run the command for start test - npm test
2.For report Run the command- allure serve
3.For Xpath configuration-npm install -D cypress-xpath
## Environment Variables

You can override or set your own custom environment variables using any of these methods: https://docs.cypress.io/guides/guides/environment-variables.html
## Setting Any of these environment variables will be available with CYPRESS.env("MY_ENV_VAR")
## Key Points

1.All test cases should be under cypress/Integration
2.For Adding or load any plugin, use plugins/index.js
3.Whenever required to import, use support/index.js file to add command.
example-import '@shelex/cypress-allure-plugin';

## New Update

1.In this code , I added one more plugin for xpath configuration
 1.In test Runner command-npm install -D cypress-xpath
 2.Also added(Support/index.js) one line of code - require('cypress-xpath') 
2.In this code Home Page Test Cases covered section wise.
 1.Added Six Folders Section wise to cover test cases in each section.
3.Added Negative Test Cases Scenario for SignUp Page
4.Added Test Cases for Block Level testing For Page 1 and Page 2
5.Break All Test cases for Page 1 and 2 into more test cases because in all together, test runner sometimes failed to reload.

6.Updated code for Third and Fourth Block Page Test Cases.
