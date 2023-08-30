import 'cypress-iframe'  

describe("Mouse Operations", () =>{

    it("MouseHover",()=>{

        cy.visit("https://demo.opencart.com/");

        cy.xpath("//a[normalize-space()='Mac (1)']").should('not.be.visible');

        cy.get(".nav.navbar-nav>li:first-child").trigger('mouseover').click();

        cy.xpath("//a[normalize-space()='Mac (1)']").should('be.visible');

        cy.xpath("//a[normalize-space()='Mac (1)']").click();

    });

    it("Right Click",()=>{

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");


        //Approac01

        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');

        // cy.get('.context-menu-icon-copy > span').should('be.visible');
        

        // Approach02

        cy.get(".context-menu-one.btn.btn-neutral").rightclick();

        cy.get('.context-menu-icon-copy > span').should('be.visible');



    });

    it("Double Click",()=>{

         cy.visit("https://artoftesting.com/samplesiteforselenium");

        // cy.get("#dblClkBtn").trigger('dblclick');

        // cy.on('window:alert',(t)=>{                     

        //     expect(t).to.contain('Hi! Art Of Testing, Here!');

        // })

        cy.get("#dblClkBtn").dblclick();

        cy.on('window:alert',(t)=>{                     // take a look at he cypress doc for events 

            expect(t).to.contain('Hi! Art Of Testing, Here!');

        })
        

    });

    it("Drag and Drop",()=>{

        cy.visit("http://webdriveruniversity.com/Actions/index.html");
        // cy.get("#draggable").drag("#droppable"); // plugin doesnt work properly !!!!!!!!

        const dataTransfer = new DataTransfer();

        cy.get("#draggable").trigger('dragstart',{
            dataTransfer
        });

        cy.get("#droppable").trigger('drop',{
            dataTransfer
        })


    });

    it("Drag and Drop in iframe",()=>{

        const dataTransfer = new DataTransfer();

        cy.visit("https://jqueryui.com/droppable/#default");

        cy.frameLoaded(".demo-frame");

        cy.iframe(".demo-frame").find("#draggable").trigger('dragstart',{
            dataTransfer
        });

        cy.iframe('.demo-frame').find("#droppable").trigger('drop',{
            dataTransfer
        });
       

   });

   it.only("Scrolling Page",()=>{

    cy.visit("https://webdriveruniversity.com/");

   cy.xpath("//h1[normalize-space()='DATEPICKER']").scrollIntoView({duration:3000}); // "duration" to arrange the timing of scroll!!
   
   cy.xpath("//h1[normalize-space()='DATEPICKER']").should('be.visible');

   cy.xpath("//h1[normalize-space()='AJAX LOADER']").scrollIntoView({duration : 3000});

   cy.xpath("//h1[normalize-space()='AJAX LOADER']").should('be.visible');
});

})