describe('CountdownAdvertisement', () => {


    it('AssertionTheCountdown', () => {



        cy.visit('https://www.youtube.com/');

        cy.get('#search-input > #search').type('countly {enter}');

        //Burası listeden videoyu seciyor
        cy.get(':nth-child(3) > :nth-child(3) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image--fill-parent-height').click();


        let initialCountdown;


        // Countdown un locator ı
        cy.get("span[class='ytp-ad-preview-container ytp-ad-preview-container-detached modern-countdown-next-to-thumbnail'] > div")
            .invoke('text')
            .then((text) => {
                initialCountdown = parseInt(text, 10);

            })

        cy.wait(2000);

        // Yine aynı countdown locator ıle 2 sn bekledıkten sonra 1. assertion yapılıyor
        cy.get("span[class='ytp-ad-preview-container ytp-ad-preview-container-detached modern-countdown-next-to-thumbnail'] > div")
            .invoke('text')
            .then((text) => {

                const updatedCountdown01 = parseInt(text, 10);
                expect(updatedCountdown01).to.be.lessThan(initialCountdown);
            })

        cy.wait(2000);

        // Yine aynı countdown locator ıle 4 sn bekledıkten sonra 2. assertion yapılıyor
        cy.get("span[class='ytp-ad-preview-container ytp-ad-preview-container-detached modern-countdown-next-to-thumbnail'] > div")
            .invoke('text')
            .then((text) => {

                const updatedCountdown01 = parseInt(text, 10);
                expect(updatedCountdown01).to.be.lessThan(initialCountdown);
            })


        cy.wait(2000);

        // En sonunda da countdown un visible olmadıgı test edılıyor
        cy.get("span[class='ytp-ad-preview-container ytp-ad-preview-container-detached modern-countdown-next-to-thumbnail'] > div").should('not.be.visible');

    })

    // cy.wait(5000);
    // cy.get('.ytp-ad-skip-button-modern').click();
    // cy.get('.video-stream').click();

    // cy.wait(5000);
    // cy.get('.video-stream').click();


    it('2', () => {

        cy.visit('https://www.youtube.com/');

        cy.get('#search-input > #search').type('countly {enter}');

        cy.get(':nth-child(3) > :nth-child(3) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image--fill-parent-height').click();

        cy.get("span[class='ytp-ad-preview-container ytp-ad-preview-container-detached modern-countdown-next-to-thumbnail'] > div").as('counter')
            .invoke('text')
            .then(parseInt)
            .then((text) => {
                cy.wait(2000)
                cy.get('@counter').invoke('text').then(parseInt)
                    .should((newText) => {
                        expect(newText).to.be.lessThan(text)
                    })
            })

    })

    it.only('', () => {

        cy.visit('https://www.youtube.com/');

        cy.get('#search-input > #search').type('countly {enter}');

        cy.get(':nth-child(3) > :nth-child(3) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image--fill-parent-height').click();

        for(let i=0; i<2; i++){

            cy.get("span[class='ytp-ad-preview-container ytp-ad-preview-container-detached modern-countdown-next-to-thumbnail'] > div").as('counter')
            .invoke('text')
            .then(parseInt)
            .then((text)=>{
                cy.wait(2000)
                cy.get('@counter').invoke('text').then(parseInt)
                .should((newText)=>{
                    expect(newText).to.be.lessThan(text)
                })
            
        })
            
        }
       
    });


})