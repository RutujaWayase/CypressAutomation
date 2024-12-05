/*
//test suite
describe('Tutorialspoint', function() {
    it('Scenario 1', function(){
        //test step to launch a URL
        cy.visit("https://accounts.google.com")
        //identify element
        cy.get('h1#headingText').find('span').should('have.text', 'Sign in')
        cy.get('h1#headingText').find('span').then(function(e){
            const t = e.text()
            //get console
            console.log(t)
        })
        //Console message
        console.log("Tutorialspoint-Cypress")
    })
})
*/    

//Modes of Promise
/*
Resolved − This outcome occurs, if the test step runs successfully.

Pending − This is the outcome, if the test step run result is being awaited.

Rejected − This is the outcome, if the test step runs unsuccessfully.
*/


describe('tutorialpoint Test', function() {
    it('Promise', function() {
        return cy.visit("https://accounts.google.com")
        .then(() => {
            return cy.get('h1#headling');
        })
    })
})