const Papa = require('papaparse')

Cypress.Commands.add('exportCSV', (data) => {
    var csv = Papa.unparse(data);
    cy.writeFile('D:/automation_practice/automation-test-challenge/cypress/fixtures/test.csv',csv)

})