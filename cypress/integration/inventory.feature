# language: pt
Funcionalidade: Inventory

Como usuário
Quero selecionar produtos
Para fazer compras

Contexto: Página inicial
Dado que esteja logado e na página "inventory"



Cenário: selecionar um produto novo
Quando clicar no botão "Add to cart" do primeiro produto exibido
Então o ícone de carrinho deve exibir um span com número 1