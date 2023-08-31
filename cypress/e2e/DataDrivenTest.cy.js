describe("MyTestsuite",()=>{

    it("DataDrivenTest",()=>{

        cy.fixture("orangehrm02").then((data)=>{


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


            data.forEach((userdata) => {
                
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();

                if(userdata.username=="Admin" && userdata.password=="admin123"){

                    cy.xpath("//span[normalize-space()='PIM']").should('have.text',userdata.expected);
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click(); // logout
                    cy.xpath("//a[normalize-space()='Logout']").click();                  // logout


                }else{

                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text','Invalid credentials');

                }

            });

        });

    });

});