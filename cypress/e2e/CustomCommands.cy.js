describe("Cuntom Commands", ()=>{


    it("Handling Links", ()=>{

        cy.visit("https://demo.nopcommerce.com/");
        
        cy.clicklink("Apple MacBook Pro 13-inch");

        // clicnklink was dsigned in commands.js

        //"Apple MacBook Pro 13-inch"
    });

    it("owerriting existing commands", ()=>{

        cy.visit("https://demo.nopcommerce.com/");
        
        cy.clicklink("APPLE MACBOOK PRO 13-inch");

        // clicnklink was dsigned in commands.js
    });

    it.only("Login command", ()=>{

        cy.loginapp("testing@gmail.com","test123");
        cy.get('.ico-logout').should('be.visible');


        
       
    });


});