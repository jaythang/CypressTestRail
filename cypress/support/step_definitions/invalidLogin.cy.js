import {
    Given,
    When,
    Ad,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  When ('I Enter Incorrect Password', () => {

    cy.get('#password').type('Password!');



  Then ('it should show me an Error', () => {
    cy.url('https://onepitch.co/login').should('contain.text', "Wrong password")
  });

});


