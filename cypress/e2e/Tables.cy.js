describe('Handle Tables',()=>{


    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("#input-username").type('demo');
        cy.get("#input-password").type('demo {enter}');

        cy.get('.btn-close').click();

        cy.get("#menu-customer>a").click();           // Customer mainmenu
        cy.get("#collapse-5>li:first-child").click(); // Customer sub/child item


    })

    it('Check Number Rows & Columns', ()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length',10);
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length',7);

    })

    it('Check Cell Data from specific row & Column', ()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)")
        .contains("gorankrezic90@gmail.com");

    })

    it('Read all the rows & Columns data in he first page', ()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{

            cy.wrap($row).within(()=>{

                cy.get("td").each(($col, index, $cols)=>{

                    cy.log($col.text());

                })

            })

        })

    })

    it.only('Pagination', ()=>{

        // find total number of pages
        /*

        let totalPages;

        cy.get(".col-sm-6.text-end").then( (e)=>{

            let mytext=e.text(); // Showing 14881 to 14889 of 14889 (1489 Pages)
            totalPages = mytext.substring(  mytext.indexOf("(")+1, mytext.indexOf("Pages")-1  )
            cy.log("Total number of pages in the table : " + totalPages);


        })
        */

        let totalPages = 8;


    for(let p=1;p<=2;p++){

        if(totalPages>1){

            cy.log("Active page is : " + p);

            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
            cy.wait(3000);

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{

                cy.wrap($row).within(()=>{
                    cy.get("td:nth-child(3)").then((e)=>{

                        cy.log(e.text());
                    })
                })

            })

            


        }

    }


    for(let p=5;p<=totalPages;p++){

        if(totalPages>1){

            cy.log("Active page is : " + p);

            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
            cy.wait(3000);

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{

                cy.wrap($row).within(()=>{
                    cy.get("td:nth-child(3)").then((e)=>{

                        cy.log(e.text());
                    })
                })

            })

            


        }

    }


    })

    
})