/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que esteja logado e na página {string}', (urlComplement) => {
  cy.realizaLoginPadrao();
  cy.url().should('include', urlComplement);
});

When('clicar no botão {string} do primeiro produto exibido', (btnText) => {
  cy.contains(btnText).click();
});

Then('o ícone de carrinho deve exibir um span com número {int}', (qnt) => {
  cy.get('.shopping_cart_badge').should('have.text', qnt);
});
