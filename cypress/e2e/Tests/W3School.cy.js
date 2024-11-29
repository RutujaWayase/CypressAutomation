/// <refrence >

describe ('We school', () => {
    it('Sort test', () => {
        cy.visit('https://www.w3schools.com/');
        cy.get('#tnb-google-search-input').type('Sort Table')
        cy.get('#tnb-google-search-submit-btn').click()
        cy.get(':nth-child(1) > .gs-webResult > .gsc-thumbnail-inside > div.gs-title > .gs-title').click()
        //cy.get('#myTable >tbody> tr > td').contains()
        //cy.get('ws-btn w3-dark-grey').click()

    })

    it('Sort table', () => {
        cy.visit('https://www.w3schools.com/howto/howto_js_sort_table.asp');
        cy.get('ws-btn w3-dark-grey').click()
        //cy.get
    })
})
