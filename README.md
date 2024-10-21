Site da página: https://advantageonlineshopping.com/#/

Swagger UI: https://www.advantageonlineshopping.com/api/docs/


Configuração de ambiente cypress:

 git init: para iniciar o repositório git
 npm init: para iniciar o projeto 
 npm install cypress@13.14.2 --save-dev 


 Gerar relatório em html com o framework Mocha:
 
 npm install --save-dev mochawesome

 Configurar o arquivo cypress.config.js conforme a figura abaixo.
 ![image](https://github.com/user-attachments/assets/1b79d9d8-8128-4932-82f4-1a28a8799418)

Rodar o comando npx cypress run --reporter mochawesome para gerar o relatório.
