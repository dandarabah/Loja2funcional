describe('itens_carrinho', () => {
    beforeEach(() => {
        cy.visit('https://advantageonlineshopping.com/#/');

    })
    it('Verificar o(s) iten(s) no carrinho de compra', () => {
        //clicar no carrinho de compras"
        cy.get('#shoppingCartLink').click();
        //o(s) iten(s) devem ser exibidos no carrinho
        cy.get('.sticky').should('be.visible')
    })
});