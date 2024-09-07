/// <reference types="Cypress" />

describe('My first test suite', function () {
    it('My first test case', function() {
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //selenium get is used to hit url in browser
        //cypress get is used/acts like find Element of selenium
        cy.get('.product:visible').should('have.length',4) //should is an assertion from Chai library
        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.pproduct-name').text()
            if(textVeg.includes('Cashews')){
                $el.find('button').click()
                //$el.find().click()
            }

        })


    })
})