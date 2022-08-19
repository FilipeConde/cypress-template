/// <reference types="cypress"/>

import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/loginPage';

When('logar com usuário {string} e senha {string}', (user, password) => {
  LoginPage.login(user, password);
});
Then('deve acessar a página {string}', (urlComplement) => {
  cy.url().should('include', urlComplement);
});

Then('deve exibir a mensagem {string}', (message) => {
  cy.get('[data-test="error"]').should('include.text', message);
});
