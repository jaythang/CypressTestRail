import {
    Given,
    When,
    Ad,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

When ('I click on Submit Pitch', () => {
    cy.get('.modal-content > .modal-card > .card-body > .d-flex > .btn:nth-child(1)').click()
   

})
When ('I should go to Create Pitch', () => {
    cy.visit('https://onepitch.co/pitch/create')


    
})
When ('I scroll down', () => {
    cy.get('#subject').click();
cy.get('#subject').type('test pitch');
cy.get('#url').type('pitch.com');

    
})
Then ('It should show me a prompt', () => {
    cy.get('.write-your-pitch > .restricted-error > .position-relative > .us-bg-text > .btn').should('contain.text', 'Upgrade to All Access Plan')

})







