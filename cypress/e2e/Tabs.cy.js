describe('Handle tab',()=>{

    it('Approach01',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows") // parent tabs

        cy.get(".example>a").invoke('removeAttr','target').click() // removing the "target" attribute, after removing the "target" attribute new tab will not open instead new page will load in the same page
        
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        //operationss
        cy.go('back'); // go back to parent tab
    })


    it('Approach02',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows") // parent tabs

        cy.get(".example>a").then((e)=>{

            let url = e.prop('href')
            cy.visit(url);

        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        //operationss
        cy.go('back'); // go back to parent tab
        
    })


})