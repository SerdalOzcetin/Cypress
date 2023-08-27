describe('Alerts', ()=>{


    //1) Javascript Alerts: It wıll have some text and an "OK" button

    it('Js alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()   // cypress automatıcally closes the alert windows no need to use any code.

        cy.on('window:alert',(t)=>{                     // take a look at he cypress doc for events 

            expect(t).to.contain('I am a JS Alert');

        })

        cy.get('#result').should('have.text','You successfully clicked an alert');

    })

    //2) Javascript Confırm Alerts : It wıll have some text wıth "OK" and "Cancel" buttons
    it('Js confirm alert-ok', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click(); // cypress automatıcally closes the js confırm alert by usıng "ok" button-default


        cy.on('window:confirm',(t)=>{

            expect(t).to.contain('I am a JS Confirm');

        })

        cy.get('#result').should('have.text','You clicked: Ok');

    })


    it('Js confirm alert-ok', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click(); // cypress automatıcally closes the js confırm alert by usıng "ok" button-default


        cy.on('window:confirm',(t)=>{

            expect(t).to.contain('I am a JS Confirm');

        })

        cy.on('window:confirm',()=> false); // cypress cloeses alert wındow usıng cancel button

        cy.get('#result').should('have.text','You clicked: Cancel');

    })
    

    //3) Javascript Prompt Alerts : It wıll take some text wıth a text box for user ınput along wıth "OK"

    it('Js promt alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win)=>{

            cy.stub(win, 'prompt').returns('welcome')
        
        })

        cy.get("button[onclick='jsPrompt()']").click();  // cypres wıll automatıcally close promted alert---it wıll use "ok" button -- by default
        cy.get('#result').should('have.text','You entered: welcome');   


    })

    it('Js promt alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win)=>{

            cy.stub(win, 'prompt').returns('welcome')
        
        })

        cy.get("button[onclick='jsPrompt()']").click();  // cypres wıll automatıcally close promted alert---it wıll use "ok" button -- by default
        cy.on('window:prompt',()=> false);

        cy.get('#result').should('have.text','You entered: null');   


    })


    //4) Autentıcated Alerts

    it.only('Authentıcated alert', ()=>{

        //approach 01
        /*
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin",password:"admin"}});

        cy.get("div[class='example'] p").contains('Congratulations!');
        cy.get("div[class='example'] p").should('have.contain','Congratulations!')

        */

        //approach 02

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain','Congratulations!')


    })



})