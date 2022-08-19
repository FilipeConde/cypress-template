/// <reference types="cypress"/>

import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { elements } from '../../pages/loginPage';

When('logar com usuário {string} e senha {string}', (user, password) => {
  cy.get(elements.usernameField).type(user);
  cy.get(elements.passwordField).type(password);
  cy.get(elements.loginBtn).click();
});
Then('deve acessar a página {string}', (urlComplement) => {
  cy.url().should('include', urlComplement);
});

Then('deve exibir a mensagem {string}', (message) => {
  cy.get('[data-test="error"]').should('include.text', message);
});
