describe('XPathLocators', () =>{

    // require('cypress-xpath');  this code should be added to support>e2e.js file to be recognized by e2e test files.

    it('products', () => {

        cy.visit("https://amazon.com/")

        cy.get("#twotabsearchtextbox").type("teapot") // get is by default "css"

        cy.get("#nav-search-submit-button").click()

        cy.xpath("//div[contains(@data-cel-widget,'search_result')]").should('have.length',67)

        // take a look at chainedxpath

    })


})