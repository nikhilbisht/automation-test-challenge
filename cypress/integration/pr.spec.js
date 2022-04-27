var links = [], localStorage, data = [], pr_count = 0;
describe("Test case", () => {


    before(() => {
        cy.visit('https://github.com/webdriverio/webdriverio')
    })

    it("Navigate to Pull request tab", () => {
        cy.get('span[data-content="Pull requests"]').click()
    })

    it("pr is", () => {
        let pages, current_page;
        cy.get('span[id="pull-requests-repo-tab-count"]').should('be.visible').invoke('text').as('totalPR')

        cy.get('@totalPR').then((openPR) => {

            if (openPR > 0) {

                pages = Math.floor(openPR / 25) + 1
                current_page = 1
                do {
                    cy.get('div[aria-label="Issues"]').should('be.visible').within(() => {
                        cy.log("cur1", current_page)
                        cy.get('div.flex-auto').each(($el, index, $list) => {


                            cy.get('a[id*="issue"]').eq(index).invoke('text').then((pr) => {
                                data.push({ "PR": pr })
                            })
                            cy.get('relative-time').eq(index).invoke('attr', 'title').then((time) => {
                                data[data.length-1]["time"]=time

                            })
                            cy.get('a[title*="created by"]').eq(index).invoke('text').then((author) => {

                                data[data.length-1]["author"]=author

                            })

                        })

                    })

                    if (current_page < (pages)) {
                        cy.wait(2000)
                        cy.get('a.next_page').contains('Next').click({ force: true })
                        cy.wait(2000)
                    }
                    current_page = current_page + 1
                } while (current_page <= pages)

                cy.log("data is", data)
            }
        })

    })

    it("update data in csv file",()=>{
        cy.exportCSV(data)
    })


})