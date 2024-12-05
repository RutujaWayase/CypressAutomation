const cypress = require("cypress")
/*

Cypress commands
1) Click all the checkboxes:

cy.get('input[type="checkbox"]').check()

2) Click a checkbox with id check

cy.get('#chk').check()

3) Click a checkboxes with values - Java and Python

cy.get('input[type="checkbox"]').check(['Java', 'Python'])

4) Click the checkoxe having value Java with options 

cy.get('.chk').check('Java', options)

5) Click the checkboxes with values - Java and python with options

cy.get('input[type="checkbox]').check(['Java', 'Python'], options)

6) Click the checkbox having class check with an option

cy.get('.chk').check({force: true})

7) Uncheck all the checkboxes

cy.get('input[type="checkbox"]').uncheck()

8) Uncheck a checkbox with id check

cy.get('#chk').uncheck()

9) Uncheck the checkbox with value Cypress

cy.get('input[type="checkbox"]').uncheck('Cypress')

10) Uncheck the checkboxes with values - Java and Python

cy.get('input[type="checkbox"]').check(['Java', 'Python'])

11) Uncheck the checkbox having value Java with options 

cy.get('.chk').uncheck('Java', options)

12) Uncheck the checkboxes with values - Java and Python

cy.get('input[type="checkbox"]').uncheck(['Java', 'Python'], options)

13) Uncheck the checkboxhaving class check with an option

cy.get('.chk').uncheck({force: true})


Options in Cypress:

log – Default value – true − This is used to turn on/off console log.

timeout – Default value – defaultCommandTimeout(4000ms) − This is used to provide the maximum wait time prior to throwing an error.

force – Default value – false − This is used to enforce an action.

scrollBehaviour – Default value – scrollBehaviour(top) − This is for the position of viewport up to which element to be scrolled prior command execution.

waitForAnimations – Default value – waitForAnimations(true) − This is used to wait for elements to complete animation prior running the commands.

animationDistanceThreshold - Default value – animationDistanceThreshold (5) − This is for the pixel distance of an element that should be exceeded to qualify for animation.

*/

// test suite
describe('Tutorialspoint', function () {
    // it function to identify test
    it('Scenario 1', function (){
       // test step to launch a URL
       cy.visit("https://accounts.google.com/signup")
       //checkbox with assertion
       cy.get('input[type="checkbox"]').check().should('be.checked')
       //identify checkbox with class with assertion
       cy.get('.VfPpkd-muHVFf-bMcfAe').uncheck().should('not.be.checked')
    })
 })