describe('CSSLocators', () => {
    it('csslocators', () =>{

        // tag#id --- tag is optional
        // tag.class --- tag is optional
        // tag[attribute = 'value'] --- tag is optional
        // tag.classname[attribute = 'value'] --- tag is optional

        // to use the xpath we need to install "cypress-xpath" plugin

        cy.visit("https://amazon.com/")
        
        cy.get("#twotabsearchtextbox").type("teapot")  // by id --- tag is optional

        cy.get("#nav-search-submit-button").click()
        
        cy.get(".a-color-state.a-text-bold").contains("teapot") //Assertion

        
        

    })
})