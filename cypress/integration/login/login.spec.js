import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('logar com usuário {string} e senha {string}', (user, password) => {
  cy.get('[data-test="username"]').type(user);
  cy.get('[data-test="password"]').type(password);
  cy.get('#login-button').click();
});
Then('deve acessar a página {string}', (urlComplement) => {
  cy.url().should('include', urlComplement);
});

Then('deve exibir a mensagem {string}', (message) => {
  cy.get('[data-test="error"]').should('include.text', message);
});
