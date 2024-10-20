describe('itens_carrinho', () => {
    beforeEach(() => {
        cy.visit('https://advantageonlineshopping.com/#/');

    })
    it('Verificar o(s) iten(s) no carrinho de compra', () => {
        cy.get('#shoppingCartLink').click();
        cy.get('.sticky').should('be.visible')
    })
});