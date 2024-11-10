describe("Assertions demo", () => {
    it("Implicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //Implicit assertions: should, and
        //checking assetion on url
       /* 
        cy.url().should('include', 'orangehrmlive.com') //include
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //equal
        cy.url().should('contain', 'orangehrm') //contain
      */
     /*
       cy.url().should('include', 'orangehrmlive.com')
         .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         .should('contain', 'orangehrm')
    */

         //adding multiple assertions
         cy.url().should('include', 'orangehrmlive.com')
         .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //positive assertion => eq; negative assertion => not.eq
         .and('contain', 'orangehrm')
         .and('not.contain', 'greenorangehrm') //negative assertion => not.contain

         cy.title().should('include', 'Orange')
         .and('eq','OrangeHRM')
         .and('contain', "HRM")

         //verify logo
        /* 
         cy.get('.orangehrm-login-branding > img').should('be.visible') // be.visible => will check wheter the element is visible or not
         cy.get('.orangehrm-login-branding > img').should('exist') //exist => check element exists on pge or not
        */

         cy.get('.orangehrm-login-branding > img').should('be.visible') // be.visible => will check wheter the element is visible or not
         .and('exist') //exist => check element exists on pge or not

         //Capture all links presnt on webpage
         cy.xpath("//a").should('have.length', '5') //No. of links

         cy.get("input[placeholder='Username']").type("Admin") //provide a value into inputbox

         cy.get("input[placeholder='Username']").should('have.value', 'Admin') //value

    })


    // Explicit assertions

    it("explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        //First we capture the title of the element and comparing it with expected title => We are using Explicit assetion i.e. Expect in BDD approach
/*
        let expName="Farhan Khan";
        cy.get(".oxd-userdropdown-name").then((x) => {

            let actName = x.text()

            //BDD Style
            expect(actName).to.equal(expName)

            expect(actName).to.not.equal(expName) //negative assertion

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })
*/
        let expectedName="";
        cy.get(".oxd-userdropdown-name").then((x) => {

            let actName = x.text()

            //BDD Style
            expect(actName).to.contain(expectedName)

            expect(actName).to.not.contain(expectedName+1) //negative assertion

            //TDD Style
            assert.include(actName,expectedName)
            assert.notInclude(actName,expectedName+1)
        })

    })
})