import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I open google page', () => {
  cy.visit('/');
});
Then('I see {string} in the title', (title) => {
  cy.title().should('include', title);
});
