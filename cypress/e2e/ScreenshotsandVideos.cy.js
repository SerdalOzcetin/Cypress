describe("Mysuite",()=>{

   it("Screenshot", ()=>{

    cy.visit("https://demo.opencart.com/");
    cy.screenshot();
    cy.get('#logo > a > .img-flid').screenshot();

   });

});