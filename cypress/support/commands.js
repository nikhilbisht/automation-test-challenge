const Papa = require('papaparse')

Cypress.Commands.add('exportCSV', (data) => {
    var csv = Papa.unparse(data);
    cy.writeFile('./cypress/fixtures/test.csv',csv)

})

Cypress.Commands.add('login',(email,password)=>{
    cy.get('#login-form input[name*="login[username]"]').type(email)
    cy.get('#login-form input#pass').type(password)
    cy.get("#login-form #send2").click()
})