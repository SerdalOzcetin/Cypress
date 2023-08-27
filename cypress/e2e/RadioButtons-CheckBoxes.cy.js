describe("Check UI Elements", ()=>{

    // it("Checking Radio Buttons", ()=>{

    //     cy.visit("https://artoftesting.com/samplesiteforselenium")

    //     cy.get("input#male").should('be.visible')
    //     cy.get("input#female").should('be.visible')


    //     // Select the radio button

    //     cy.get("input#male").check().should('be.checked')
    //     cy.get("input#female").should('not.be.checked')

    // })


    it("Checking Check Boxes", ()=>{

        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        // Selecting al the checkboxes

        cy.get("#checkboxes").should('be.visible')
        // cy.get("#checkboxes").check().should('be.checked')

        // cy.get("#checkboxes").first().uncheck().should('not.be.checked')
        // cy.get("#checkboxes").last().uncheck().should('not.be.checked')

        cy.get("input[value='option-1']").check().should('be.checked')
        cy.get("input[value='option-2']").check().should('be.checked')
        cy.get("input[value='option-3']").uncheck().should('not.be.checked')


        // Select the radio button

        cy.get("input[value='green']").check().should('be.checked')
        cy.get("input[value='blue']").check().should('be.checked')
        cy.get("input[value='yellow']").check().should('be.checked')
        cy.get("input[value='orange']").check().should('be.checked')
        cy.get("input[value='purple']").check().should('be.checked')

        



    })


})