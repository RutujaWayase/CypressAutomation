///<reference types = 'Cypress'/>

describe('Alerts', () => {

    //1) Javascript Alerts: It will have some text and an 'OK' button.
    it('JS JavaScript Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');

        })

        //alert window automatically closed by cypress
        cy.get("#result").should('have.text','You successfully clicked an alert')


    })

    //2) Javascript Comfrim Alert: It will have some text with 'OK' and 'Cancel' buttons.
    it('JS Confrim Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contain('I am a JS Confirm');

        })
        //cypress automatically closed alert window by using ok button - default
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('JS Confrim Alert - Cancel',() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contain('I am a JS Confirm');
        })

        cy.on('window:confirm',() => false); //cypress closes alert window using cancel button

        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK" button.
    it('JS promt alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        //cypress will automatically close prompted alert - It will use OK button - by default

        //cy.on('window:prompt',() => false); // to close the prompt alert window by using cancel button

        cy.get("#result").should('have.text', 'You entered: welcome')



    })

    //4) Authenticated Alert
    
    it('Authenticated alert', () => {
    /*
        //approach1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                                                                    {
                                                                        username:"admin",
                                                                        password: "admin"
                                                                    }
                                                                }
                                                            );
    cy.get("div[class='example'] p").should('have.contain', "Congratulations!");
    */

    //approach2

    //  https://username:password@the-internet.herokuapp.com/basic_auth


    // https://admin:admin@the-internet.herokuapp.com/basic_auth

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain', "Congratulations!");

    })




})