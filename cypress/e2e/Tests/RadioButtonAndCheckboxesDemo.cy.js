//const cypress = require("cypress")
/// <reference types="Cypress"/>

describe("Check UI Elements", () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        //visiblity of radio buttons
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
        
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
        

    })

    it("Checking Check Boxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        //Visibility of the element
        cy.get("input#monday").should('be.visible')

        //Selecting single checkbox - monday
        cy.get("input#monday").check().should('be.checked')

        //Unselecting checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')

        //Selecting all the check boxes
        cy.get("input.from-check-input[type='checkbox']").check().should('be.checked')

        //Unselecting all the check boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //select first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        
        //select first checkbox
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


        

    })
})