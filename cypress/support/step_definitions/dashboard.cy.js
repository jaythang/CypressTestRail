import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


    When ('I go to Pitches', () => {
        cy.get('#welcomeOnePitchModal > .modal-dialog > .modal-content > .modal-card > .p-3 > .btn-close').click()


    })

    Then ('I should see the Create and Submit Link', () => {
        cy.get('.container-fluid > #sidebarCollapse > .navbar-nav > .nav-item:nth-child(2) > .nav-link').click().should('contain.text', 'Pitches')
        cy.get('.nav-item > #sidebarPitchScores > .nav > .nav-item:nth-child(1) > .nav-link').click().should('contain.text', 'Create')
        cy.get('.nav-item > #sidebarPitchScores > .nav > .nav-item:nth-child(2) > .nav-link').click().should('contain.text', 'Submitted')
     

    })
    When ('I go to Journalist', () => {
        cy.get('.container-fluid > #sidebarCollapse > .navbar-nav > .nav-item:nth-child(3) > .nav-link').click().should('contain.text', 'Journalists')
 
  
     
 

    })
    Then ('I should see Suggested and List', () => {
        cy.get('.nav-item > #sidebarJournalistInfo > .nav > .nav-item:nth-child(1) > .nav-link').click().should('contain.text', 'Suggested')
        cy.get('.nav-item > #sidebarJournalistInfo > .nav > .nav-item:nth-child(2) > .nav-link').click().should('contain.text', 'Lists')

    })
    When ('I go to Emails', () => {
        cy.get('.container-fluid > #sidebarCollapse > .navbar-nav > .nav-item:nth-child(4) > .nav-link').click()


    })
    Then ('I should see Sent and Scheduled', () => {
        cy.get('.nav-item > #sidebarEmailJournalist > .nav > .nav-item:nth-child(1) > .nav-link').click().should('contain.text', 'Sent')
        cy.get('.nav-item > #sidebarEmailJournalist > .nav > .nav-item:nth-child(2) > .nav-link').click().should('contain.text', 'Scheduled')


    })
  




