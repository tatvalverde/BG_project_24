///      <reference types="cypress"/>

describe('Main Page Elements', () => {
    it('Verify all alerts are displayed ' , () => {
        cy.visit('https://billygraham.org/')
        cy.get('h4 .radius.label.alert').should('be.visible').should('have.text', 'SEE TOUR DATES:')
        cy.get('a.alert').should('be.visible').should('have.text', 'Franklin Graham God Loves You Frontera Tour  ')
        cy.get('i.general.foundicon-right-arrow').should('be.visible')
        cy.get('a.close').should('be.visible')
    })

    it.only('Verify all alements in top bar section with correct names', () => {
        cy.visit('https://billygraham.org/')
        cy.get('.name > a > img').should('exist').should('be.visible')
          //.should('contain.text', 'Billy Graham Evangelistic Association')
        cy.get('ul#grow-your-faith.dropdown.medium.content.left').should('exist')
        cy.get('ul.right [href="/grow-your-faith"]').should('exist').should('include.text', 'Grow your Faith')
        cy.get('ul.right [href="/tv-and-radio"]').should('exist').should('include.text', 'TV & Radio')
        cy.get('ul.right [href="/what-we-do"]').should('exist').should('include.text', 'What We Do')
        cy.get('ul.right [href="/news"]').should('exist').should('include.text', 'News')
        cy.get('ul.right [href="/about"]').should('exist').should('include.text', 'About')
        cy.get('ul.right [href="/give"]').should('exist').should('include.text', 'Give')
        cy.get('i.foundicon-search').should('exist').should('be.visible').click()
        cy.get(':nth-child(1) > .small-12 > form > .row > .small-10 > input').should('contain', 'Search')
        

    })

})    
