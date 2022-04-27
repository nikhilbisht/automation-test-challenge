var links=[], localStorage;
describe("Test case",()=>{

    beforeEach(() => {
        cy.restoreLocalStorage();
      });
    
      afterEach(() => {
        cy.saveLocalStorage();
      });

    before(()=>{
        
       cy.visit('https://google.com')
        cy.get('input[title*="Search"]').type('mytheresa').type('{enter}')
        cy.get('a[href*="https://www.mytheresa.com"]').eq(0).click()
        cy.get(`a[href*="${Cypress.config('baseUrl')}"]`).eq(0).click()

    })

    it("should verify all the links", ()=>{
        console.log("baseurl is", Cypress.config().baseUrl)
        var notLink=['#','javascript:void(0);']
        cy.get('a').each(($el,index,$list)=>{
            var href = $el.attr('href')
            if(!((links.includes(href))&&(notLink.includes(href)))){
                links.push(href)
            }
            
        })
    })

    it("hit api request to check the status of each link", ()=>{
        links = [... new Set(links)]

        links.forEach((link)=>{

            if((link!='#')&&(link!='javascript:void(0);')){
                cy.request('GET',link).then((response)=>{
                    expect(response.status).to.eq(200)
                })
            }
            
        })
    })
})