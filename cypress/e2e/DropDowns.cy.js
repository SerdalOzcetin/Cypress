describe('handle dropdowns', () =>{


    it.skip('Dropdown with select', () =>{   // "skip" keyword provides that skip the this it block 

        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        cy.get("#dropdowm-menu-1")
        .select('Python')
        .should('have.value','python')

    })


    //Bootstrap Dropdown

    it.skip('Dropdown without select', () =>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}')

        cy.get("#select2-billing_country-container")
        .should('have.text','Italy')

    })


    it.skip('Auto Suggest dropdown', () =>{

        cy.visit("https://wikipedia.org")

        cy.get("#searchInput").type('izmir')
      
        cy.get('.suggestions-dropdown').contains('IZMIRAN').click()

    })


    it('Dynamic dropdown', () =>{

        cy.visit("https://google.com")

       cy.get("[name='q']").type('cypress automation')

       cy.wait(3000)

       cy.get("div.wM6W7d>span").should('have.length',12)

       cy.get("div.wM6W7d>span").each(($el, index, $list) =>{

        if($el.text()=='cypress automation tutorial'){

            cy.wrap($el).click()

        }

       })

       cy.get("[name='q']").should('have.value','cypress automation tutorial')

    })


    
})