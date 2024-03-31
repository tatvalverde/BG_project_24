///      <reference types="cypress"/>

describe('Home Page Elements', () => {
    it('Verify top alert is displayed ' , () => {
        cy.visit('/')
        cy.get('div[class="fg-easter-message"]').should('be.visible')
        cy.contains('a.button', 'TV/Online Listings').should('be.visible')
        cy.contains('a.button', 'Watch Trailer').should('be.visible')
       
    })

    it('Verify all alements in top bar section with correct names', () => {
        cy.visit('/')
        cy.get('.name > a > img').should('exist').and('be.visible')
        cy.get('ul.right [href="/grow-your-faith"]').should('exist').and('include.text', 'Grow your Faith')
        cy.get('ul.right [href="/tv-and-radio"]').should('exist').and('include.text', 'TV & Radio')
        cy.get('ul.right [href="/what-we-do"]').should('exist').and('include.text', 'What We Do')
        cy.get('ul.right [href="/news"]').should('exist').and('include.text', 'News')
        cy.get('ul.right [href="/about"]').should('exist').and('include.text', 'About')
        cy.get('ul.right [href="/give"]').should('exist').and('include.text', 'Give')
        cy.get('i.foundicon-search').should('exist').and('be.visible').click()
        cy.get('i.foundicon-search').click()
        cy.get('div#searchDrop.container.show-for-medium-up').should('exist')
        

    })
     
    it('Verify open new link in the new TABS Library',() => {
        cy.visit('/')
        cy.get('i.site-sprite-bglib').parent().invoke('removeAttr', 'target').click()
        cy.wait(1000)
            
        cy.origin('https://billygrahamlibrary.org/', () => {
            cy.get('h1.font-alt').invoke('text')
        }).should('equal', 'Welcome to the Billy Graham Library')
    })
    
    it.only("Verify dropdown", () => {
        cy.visit('/')

        cy.get('ul#grow-your-faith.dropdown.medium.content.left').should('exist')
        cy.get('ul#grow-your-faith.dropdown.medium.content.left')
        .parent().invoke('text').should("eq", "Daily Devotion")
        
    })

})    
