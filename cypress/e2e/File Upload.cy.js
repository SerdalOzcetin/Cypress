import 'cypress-file-upload';
import 'cypress-iframe' 

describe('File Uploads',()=>{

    it("File Uploads",()=>{

        
        cy.visit("https://webdriveruniversity.com/File-Upload/index.html");

        cy.get("#myFile").attachFile("Screenshot.png");
        cy.get("#submit-button").click();

        cy.on('window:alert',(t)=>{                     // take a look at he cypress doc for events 

            expect(t).to.contain('Your file has now been uploaded!');

        })
        
    

   });

   it("File Uploads - Rename",()=>{

        
    cy.visit("https://webdriveruniversity.com/File-Upload/index.html");

    cy.get("#myFile").attachFile({filePath:"Screenshot.png",fileName:'Myfile'});
    cy.get("#submit-button").click();

    cy.on('window:alert',(t)=>{                   

        expect(t).to.contain('Your file has now been uploaded!');

    })
    


});
    

it("File Uploads - Darg and Drop",()=>{

        
    cy.visit("https://webdriveruniversity.com/File-Upload/index.html");

    cy.get("#myFile").attachFile("Screenshot.png", {subjectType:'drag-n-drop'});

    cy.on('window:alert',(t)=>{                   

        expect(t).to.contain('Your file has now been uploaded!');

    })


});

it("File Multiple Uploads",()=>{

        
   cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
   cy.get("#filesToUpload").attachFile(['Screenshot.png','Screenshot02.png']);
   cy.get("div[class='main'] li:nth-child(1),div[class='main'] li:nth-child(2)").should('be.visible');

});

it.only("File Upload - Shadow Dom",()=>{

        
    cy.visit("https://www.htmlelements.com/demos/fileupload/show-progress/");
    cy.frameLoaded(".demo-frame");
    cy.iframe(".demo-frame").find("smart-button[id='button2ae6'] button[role='presentation']",{includeShadowDom:true}).attachFile("Screenshot.png");
 
 });
    
    



})