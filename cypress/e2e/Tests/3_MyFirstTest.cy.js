/// <reference types="Cypress" />

describe('My First Test', () => {
    //it('test1 -verify title-positive test', () => {
    it('test1 -verify title-positive test', function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })
    it('test2 -verify title-negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM1')
    })
})