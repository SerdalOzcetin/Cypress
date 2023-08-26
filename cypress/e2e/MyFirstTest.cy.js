


describe('my first test', () =>
{
    it('verify title-Positive test', () => {

      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq','OrangeHRM')
      
    })

    it('verify title-Negative test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
        
      })



})
