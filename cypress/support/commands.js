// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { elements } from '../pages/loginPage';

Cypress.Commands.add('realizaLoginPadrao', () => {
  cy.visit('/');
  cy.get(elements.usernameField).type('standard_user');
  cy.get(elements.passwordField).type('secret_sauce');
  cy.get(elements.loginBtn).click();
});

Cypress.Commands.add('validateQty', (locator, qty) => {
  cy.get(locator).should('have.text', qty);
});
