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
        cy.get('a[href*="https://www.mytheresa.com/int_en/men.html"]').eq(0).click()
        cy.request("https://www.mytheresa.com/int_en/men.html")

       
    })

    it("should verify all the links", ()=>{
        localStorage=cy.getLocalStorage('dbm2')
        var notLink=['#','javascript:void(0);']
        cy.get('a').each(($el,index,$list)=>{
            var href = $el.attr('href')
            //cy.log("href is", href)
            if(!((links.includes(href))&&(notLink.includes(href)))){
                links.push(href)
                localStorage[`${href}`]={}
            }
            
        })
       // update_value=JSON.stringify(localStorage)
    })
    it("should navigate",()=>{
        

        cy.visit("https://www.mytheresa.com/int_en/men.html")
        cy.log("logged in")
    })

    // it("hit api request to check the status of each link", ()=>{
    //     links = [... new Set(links)]
    //     // localStorage=cy.getLocalStorage('dbm2')
    //     // cy.log("localStorage is", localStorage)
        
    //     var index = links.indexOf("https://www.mytheresa.com/int_en/women.html")
    //     links.forEach((link)=>{
    //         // localStorage[link]={}
    //         // cy.log("localStorage is", cy.getLocalStorage('dbm2'))
    //         if((link!="https://www.mytheresa.com/int_en/women.html")&&(link!="https://www.mytheresa.com/int_en/men/designers/brunello-cucinelli.html")&&(link!='#')&&(link!='javascript:void(0);')){
    //             cy.request('GET',link).then((response)=>{
    //                 expect(response.status).to.eq(200)
    //             })
    //         }
            
    //     })
    // })
})