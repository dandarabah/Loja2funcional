describe('itens_carrinho', () => {
    beforeEach(() => {
        cy.visit('https://advantageonlineshopping.com/#/');

    })
    it('Verificar o(s) iten(s) no carrinho de compra', () => {
        // clicar na lupa de pesquisa
        cy.get(':nth-child(4) > .img').click();
        //digito Laptop no campo de pesquisa
        cy.get('#autoComplete').should('be.visible').type('laptop')
        cy.wait(5000)
        //As opções de Laptops são exibidos"
        cy.get('.top6Products > .roboto-medium.ng-binding').should('be.visible')
        // Selecionar um produto"
        cy.get('[href="#/product/6"] > img').click();
        //Clicar no botão ADD TO CART"
        cy.get('.fixedBtn > .roboto-medium').click();
        //O produto é adicionado no carrinho com sucesso
        cy.get('#shoppingCartLink').click();
        cy.get('.sticky > .ng-binding').should('be.visible')
    })
});