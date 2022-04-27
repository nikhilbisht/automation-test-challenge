var links=[], localStorage,user;
describe("Test case",()=>{

    before(()=>{
        cy.visit('https://google.com')
        cy.get('input[title*="Search"]').type('mytheresa').type('{enter}')
        cy.get('a[href*="https://www.mytheresa.com/"]').eq(0).click()
        cy.get(`a[href*="${Cypress.config('baseUrl')}`).eq(0).click()
        cy.visit("/")
        cy.fixture('login_data.json').then((data)=>{
            user=data
        })
    })

    it("should click on My account", ()=>{
        cy.get('a#myaccount').click()
    })
    it("should login", ()=>{
        cy.login(user.email,user.password)
    })

})