# automation-test-challenge

## Technologies Used: 
1.	Programming Language : Javascript
2.	Build Tool : npm
3.	Automation Tool used : cypress.io

## Installation
After cloning the project from the repository, make sure you run `npm install` to install all node modules. There should be no further installation required.

## Command to run Test
`npm run test:prod` is the command to run the test

## Project Structure :

1.	Fixtures : Fixtures are used as test-data that can be used by test-scripts.  Fixture files are in cypress/fixtures folder. 
2.	support :    Support files are in cypress/support.

    - cypress/support/index.js.  This file runs before every single spec file. We have imported all the .js file inside the support folder in the index.js, so we don’t have to import in all the test-scripts.
Cypress executes the support file before the spec file.

3. Plugins Folder : The plugins file is a special file that executes in Node before the project is loaded, before the browser launches, and during your test execution

4. Integration folder: This folder contains all the test-scripts.


