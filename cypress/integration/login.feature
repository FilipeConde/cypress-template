      # language: pt
      Funcionalidade: Login

      Como usuário
      Quero realizar login
      Para fazer compras

      Contexto: Página inicial
      Dado que esteja na página inicial Saucedemo



      Cenário: Login com sucesso
      Quando logar com usuário "standard_user" e senha "secret_sauce"
      Então deve acessar a página "inventory"

      Esquema do Cenário: Login mal sucedido
      Quando logar com usuário "<user>" e senha "<password>"
      Então deve exibir a mensagem "<msg>"

      Exemplos:
      | user            | password      | msg                                                         |
      | locked_out_user | secret_sauce  | Sorry, this user has been locked out                        |
      | fail_user       | secret_sauce  | Username and password do not match any user in this service |
      | standard_user   | fail_password | Username and password do not match any user in this service |
