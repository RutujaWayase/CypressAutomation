//const cypress = require("cypress")

import 'cypress-iframe'

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

    it('approach 2 - by using custom commands', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");
        cy.get("[aria-label='Bold']").click();
    })

    it('approach 3 - by using cypress iframe plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr'); //Load the frame
        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");
        cy.get("[aria-label='Bold']").click();
    })
})