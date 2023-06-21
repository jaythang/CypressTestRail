
import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";


function randomWords() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
  
  const adminUsername = Cypress.env('ADMIN_USERNAME') || "jered.martin@icloud.com";
  const adminPassword = Cypress.env('ADMIN_PASSWORD') || "MR54321!";





  Given ("that I Login to One Pitch Site", () => {
    cy.visit('https://onepitch.co/');
    cy.get('.ml-lg-3').click();
    cy.url().should('contains', 'https://onepitch.co/login');

  });


When ("I Enter my Username", () => {
    cy.get('#username').click();
    cy.get('#username').type(adminUsername)

});



When ("I Enter my Password", () => {
    cy.get('#password').click();
    cy.get('#password').type(adminPassword);
});
When ("I click on SignIn", () => {
    cy.get('.btn-warning').click();
});



Then ("I should be redirected to the Dashboard", () => {
    cy.url().should('contains', 'https://onepitch.co/profile');
    cy.wait(5000)
});



  