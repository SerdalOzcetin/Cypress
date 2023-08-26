/*
        Cypress Assertions 
            1) Imlicit assertıons

                should
                and

            eq
            contain
            include
            exist
            have.lenght
            have.value

            etc..
            
            2) Explicit assertions

                expect --BDD
                assert --TDD

 */
describe("Assertions", ()=>{

    it("Imlicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should and

        cy.url().should('include','orangehrmlive.com')

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  // after capturind once the url no need to use again and again
        .should('contain','orangehrm')

        // in stead of should "and" can be used.

        cy.url().should('include','orangehrmlive.com')                                     // after capturind once the url no need to use again and again
        .and('contain','orangehrm')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        
        // Negative Assertions

        cy.url().should('include','orangehrmlive.com')                                     // after capturind once the url no need to use again and again
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')  // Negative Assertions    
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath("//a").should('have.length',5)  // check the number of links

        cy.xpath("//input[@placeholder='Username']").type("Admin")  // provide a value into input box

        cy.xpath("//input[@placeholder='Username']").should("have.value","Admin")

    })


    it("Explicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Paul goud Collings";

        cy.get(".oxd-userdropdown-name").then( (x)=> {

            let actNme = x.text()

            // BDD Style----------------------------> take a look at cypress doc.

            expect(actNme).to.equal(expName)
            expect(actNme).to.not.equal(expName)

            // TDD Style----------------------------> take a look at cypress doc.

            assert.equal(actNme,expName)
            assert.notEqual(actNme,expName)

        })
        


        
    })


})