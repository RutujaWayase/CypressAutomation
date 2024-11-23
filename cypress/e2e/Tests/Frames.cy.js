//const cypress = require("cypress")

describe("handling frames", () => {
    it('approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.get('.tox-notification__dismiss').click();
        const iframe=cy.get("#mce_0_ifr")
          .its('0.contentDocument.body')
          .then('be.visible')
          .then(cy.wrap);

          iframe.clear().type("Welcome {cmd+a}");

          cy.get("[aria-label='Bold']").click();
          
    })
})