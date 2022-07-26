import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const URL = 'www.google.com';
When('I open google page', () => {
  cy.visit(URL);
});
Then('I see {string} in the title', (title) => {
  cy.title().should('include', title);
});
