
describe('My First Test', () => {
    it('test1', () => {
      cy.visit("https://google.com")
      cy.title().should('eq','Google')
    })
  }) 