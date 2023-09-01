describe("Mysuite",()=>{

    it("Capture the screenshots & Videos", ()=>{

        cy.visit("https://demo.opencart.com/");
        cy.screenshot();
        cy.get('#logo > a > .img-fluid').screenshot();
    });

});