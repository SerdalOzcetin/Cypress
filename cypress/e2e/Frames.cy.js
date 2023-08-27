import 'cypress-iframe'  // after installing the "npm install -D cypress-iframe" you need to import that.!!

describe('handling frames',()=>{

    it("Approach01",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("welcome {ctrl+a}");
        cy.get("button[title='Bold']").click();

    })

    it("Approach02--by using custom method",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe("#mce_0_ifr").clear().type("welcome {ctrl+a}");
        cy.get("button[title='Bold']").click();

    })

    it.only("Approach03--by using cypress-iframe plugin",()=>{

        // https://www.npmjs.com/package/cypress-iframe
        // npm install -D cypress-iframe

        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("#mce_0_ifr"); // load the frame
        cy.iframe("#mce_0_ifr").clear().type("welcome {ctrl+a}");
        cy.get("button[title='Bold']").click();

        cy.get("div[class='example'] h3").should('have.contain','An iFrame containing'); // no need to switch to defaultpage or parentpage lıke java.

        

    })

})