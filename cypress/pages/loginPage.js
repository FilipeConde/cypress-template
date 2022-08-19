/// <reference types="cypress"/>

export const elements = {
  usernameField: '[data-test="username"]',
  passwordField: '[data-test="password"]',
  loginBtn: '#login-button',
};

let { usernameField, passwordField, loginBtn } = elements;

export default class LoginPage {
  static login(username, password) {
    cy.get(usernameField).type(username);
    cy.get(passwordField).type(password);
    cy.get(loginBtn).click();
  }
}
