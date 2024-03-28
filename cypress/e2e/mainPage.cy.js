///      <reference types="cypress"/>

describe('Home Page Elements', () => {
    it('Verify top alert is displayed ' , () => {
        cy.visit('/')
        cy.get('div[class="fg-easter-message"]').should('be.visible')
        cy.contains('a.button', 'Full TV Listings').should('be.visible')
        cy.contains('a.button', 'Watch Trailer').should('be.visible')
       
    })

    it('Verify all alements in top bar section with correct names', () => {
        cy.visit('/')
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
        cy.get('i.foundicon-search').click()
        cy.get('div#searchDrop.container.show-for-medium-up').should('exist')
        

    })

    

})    
