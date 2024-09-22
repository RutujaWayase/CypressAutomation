///<reference types = "cypress"/>

describe("cypress questions", () => {
    it("How to get the page title in cypress", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')

    })
})