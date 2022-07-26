import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('que esteja na página inicial Saucedemo', () => {
  cy.visit('/');
});
