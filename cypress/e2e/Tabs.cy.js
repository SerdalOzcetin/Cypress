describe('Handle tab',()=>{

    it('Approach01',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows") // parent tabs

        cy.get(".example>a").invoke('removeAttr','target').click() // removing the "target" attribute, after removing the "target" attribute new tab will not open instead new page will load in the same page
        
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        //operationss
        cy.go('back'); // go back to parent tab
    })


    it.only('Approach02',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows") // parent tabs

        cy.get(".example>a").then((e)=>{

            let url = e.prop('href')
            cy.visit(url);                    // to work main doains(https://the-internet.herokuapp.com) should be matched !!! otherwise it wil not work.

        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        //operationss
        cy.go('back'); // go back to parent tab
        
    })

   

    /*
    Redirects made by JavaScript

        In some cases, redirect is not made by html attribute, but by JavaScript. In that case, there’s no href attribute we can open or send a request to. The only option is to click the link. But that link may point to an external site. As Cypress allows you to visit only a single superdomain (EDIT: Multi-domain support landed with version 9.6.0), you may feel limited when you want to test e.g. a feedback form that is located on Google docs. Visiting the link or sending a request are not viable options here. However, you can choose to spy on a function that is opening our browser window like this:

                    cy
                    .visit('./index.html');

                    cy
                    .window().then((win) => {
                        cy.spy(win, 'open').as('redirect');
                    });

                    cy
                    .get('a')
                    .click();

                    cy
                    .get('@redirect')
                    .should('be.calledWith', '_blank', '/about');

        At the beginning of our test, we are registering our spy method, that going to spy for an open function on our window object. In our test, we are checking that our function is called with proper arguments, _blank and /about. This way, we are checking the redirect even when we cannot see the link of our anchor element inside DOM.
        
        */


    


})