describe("Mysuite",()=>{

    it("NavigationTest", ()=>{

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq',"Your Store");

        cy.get(':nth-child(7) > .nav-link').click();
        cy.title().should('eq','Cameras');

        cy.go('back');
        cy.title().should('eq',"Your Store");

        cy.go("forward");
        cy.title().should('eq','Cameras');

        cy.go(-1); //         cy.go('back');
        cy.title().should('eq',"Your Store");

        cy.go(1); //         cy.go("forward");
        cy.title().should('eq','Cameras');

    });

});