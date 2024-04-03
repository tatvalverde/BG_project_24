///      <reference types="cypress"/>
import "cypress-real-events"
import data from '../fixtures/homePage.json'

describe('Home Page Elements', () => {
    beforeEach(()=> {
        cy.visit('/')
    })

    it('Verify top', () => {
        cy.get('a.close.radius').realClick()
        cy.get('div.alert-box.alert.noradius').should('not.exist')
    })

    it('Verify search', () => {
        cy.get('#searchDrop').should('not.be.visible')
        cy.get('a[href="#searchDrop"]').click()
        cy.get('#searchDrop').should('be.visible')
    })


    it('Verify top alert is displayed ' , () => {
        cy.get('h4.inverse').should('be.visible')
        cy.contains('.radius.label.alert', 'WATCH NOW:').should('be.visible')
        cy.contains('a.alert', data.alertMesage).should('be.visible')
       
    })

    it('Verify all alements in top bar section with correct names', () => {
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

    it("Verify dropdown", () => {
       
        //menu item is exist
        cy.get('nav ul.right a').contains(data.menuItems[0]).should('be.visible');

        //dropdown appear when user hover on menu item
        cy.get('nav ul.right a[href="/grow-your-faith"]').realHover(); //npm install cypress-real-events
        cy.get('#grow-your-faith').should('be.visible');

        //check a random element on the dropdown
        cy.get('#grow-your-faith .subheader').should('be.visible').and('have.text', 'Get insight and inspiration from Billy Graham')
    })
     
    it('Verify open new link in the new TABS Library',() => {
        cy.get('i.site-sprite-bglib').parent().invoke('removeAttr', 'target').click()
        cy.wait(1000)
            
        cy.origin('https://billygrahamlibrary.org/', () => {
            cy.get('h1.font-alt').invoke('text')
        }).should('equal', 'Welcome to the Billy Graham Library')
    })
    
})    
