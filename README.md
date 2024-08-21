# Cypress Project 
Cypress Project


Cypress - front end Automation testing tool build for modern web applications.

NPM: Node Package Manager.

Setup: 
1) Install Node.js 
2) npm install
3) npm -i init
4) npm install cypress --save-dev
5) Start cypress command: npx cypress open (or) node_modules/.bin/cypress open

Cypress official document: https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test.

Cypress Architecture

![alt text](image.png)

![alt text](image-1.png)

Testing frameworks that come with Cypress: Chai & Mocha assertion libraries. We can't use TestNG or Junit in Cypress.

To interact with DOM element in Cypress: Use CSS Selector to interact with Cypress.
![alt text](image-2.png)


Can we use BDD with Cypress?
Cypress doesn't provide any official inbuilt support for BDD. However, the NPM Cypress-Cucumber-Preprocessor plugin lets us write tests in BDD Cucumber Syntax.

Cypress:
Frontent web application testing tool.
modern web applications for React JS, Angularjs.
Opensource

Cypress Eco system:
1) Testrunner - open source, locally installed.
2) Dashboard - paid

Node.js and comes with npm module.

![alt text](image-3.png)

Who can use Cypress - Dev & QA
1) End-to-End test cases
2) Integration tests
3) Unit test cases
4) API Testing

Features:
1) Time travel
2) Debuggability
3) Automatic waits(built-in waits)
4) Consistence results
5) Screenshots & videos
6) Cross browser testing - locally or remotely

Limitations:
1) Can't automate window based/mobile apps.
2) Limited supports
3) JavaScript/Typescript
4) Reading/writing data into file is difficult.
5) Thirsd party reporting tool integration is also limited.

Writing tests: https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test

Syntax: 

describe('suite name', () => {
  it('test1', () => {
    expect(true).to.equal(false) //assertions
  })
})

