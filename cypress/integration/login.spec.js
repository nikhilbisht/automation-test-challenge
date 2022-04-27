var links=[], localStorage;
describe("Test case",()=>{

    // beforeEach(() => {
    //   // cy.restoreLocalStorage();
    //   Cypress.Cookies.defaults({
    //     preserve: ['myth_cookie_policy','NID','myth_geo','mytuuid','myth_seto','RES_TRACKINGID','frontend','myth_country','myth_dpt','category_source','TCSESSION','TC_CHECK_COOKIES_SUPPORT','TCAUDIENCE','FDLBPHOENIXDATA']
    //   })
    //   Cypress.Cookies.preserveOnce('myth_cookie_policy','NID','myth_geo','mytuuid','myth_seto','RES_TRACKINGID','frontend','myth_country','myth_dpt','category_source','TCSESSION','TC_CHECK_COOKIES_SUPPORT','mzpersistent_cart','TCAUDIENCE','FDLBPHOENIXDATA')
    // })
    
    //   afterEach(() => {
    //     cy.saveLocalStorage();
    //   });

    before(()=>{
        cy.visit('https://mytheresa.com')
        // cy.get('input[title*="Search"]').type('mytheresa').type('{enter}')
        // cy.get('a[href*="https://www.mytheresa.com"]').eq(0).click()
        // cy.get('a[href*="https://www.mytheresa.com/int_en/men.html"]').eq(0).click()
        Cypress.Cookies.defaults({
          preserve: ['myth_cookie_policy','NID','myth_geo','mytuuid','myth_seto','RES_TRACKINGID','frontend','myth_country','myth_dpt','category_source','TCSESSION','TC_CHECK_COOKIES_SUPPORT','TCAUDIENCE','FDLBPHOENIXDATA']
        })
        Cypress.Cookies.preserveOnce('myth_cookie_policy','NID','myth_geo','mytuuid','myth_seto','RES_TRACKINGID','frontend','myth_country','myth_dpt','category_source','TCSESSION','TC_CHECK_COOKIES_SUPPORT','mzpersistent_cart','TCAUDIENCE','FDLBPHOENIXDATA','_gat_UA-1052737-5','bm_sv','_uetsid','ak_bmsc','myth_collector_persistent','_clck','csf','_uetvid','cdf','redfix','_gcl_au','CAID_test','_gid','scarab.visitor','_fbp','_ga_P09DQKNR74','CAID','TCID_3rd','_mytbv','crtna')
    })

    it("should click on My account", ()=>{

        cy.get('a#myaccount').click()
        cy.get('#login-form input[name*="login[username]"]').type('nikhilbisht96@maildrop.cc')
        cy.get('#login-form input#pass').type("Password@123")
        cy.get("#login-form #send2").click()
    })
    // it("should login", ()=>{
    //     cy.get('#login-form input[name*="login[username]"]').type('nikhilbisht96@maildrop.cc')
    //     cy.get('#login-form input#pass').type("Password@123")
    //     cy.get("#login-form #send2").click()
    // })

})