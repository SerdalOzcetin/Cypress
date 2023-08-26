describe('CSSLocators', () => {
    it('csslocators', () =>{

        // tag#id --- tag is optional
        // tag.class --- tag is optional
        // tag[attribute = 'value'] --- tag is optional

        cy.visit("https://amazon.com/")
        
        cy.get("#twotabsearchtextbox").type("teapot")  // by id --- tag is optional

        cy.get("#nav-search-submit-button").click()
        
        cy.get(".a-color-state.a-text-bold").contains("teapot") //Assertion

    })
})