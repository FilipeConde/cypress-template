/// <reference types="cypress"/>

const elements = {
  shoppingCartBadge: '.shopping_cart_badge',
  shoppingCartBtn: '.shopping_cart_link',
};

const { shoppingCartBadge, shoppingCartBtn } = elements;

export default class InventoryPage {
  static shoppingCartBtnClick() {
    cy.get(shoppingCartBtn).click();
  }

  static validateCartQtyLabel(qty) {
    cy.validateQty(shoppingCartBadge, qty);
  }
}
