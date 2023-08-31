// before
// after
// beforeEach
// afterEach

// .skip
// .only

describe("MyTestSuite", ()=>{

    before(()=>{

        cy.log("***** Launch the App *****");
    });

    after(()=>{

        cy.log("***** Close the App *****");

    });


    beforeEach(()=>{

        cy.log("***** Login *****")

    });

    afterEach(()=>{

        cy.log("***** Logout *****")

    })


    it.skip("search", ()=>{  // to skip the test block 

        cy.log("***** searching *****");

    });

    it.only("advanced search", ()=>{  // to run the only thıs test block


        cy.log("***** advanced searching *****");

    });

    it("listing products", ()=>{


        cy.log("***** listing products *****");

    });

})