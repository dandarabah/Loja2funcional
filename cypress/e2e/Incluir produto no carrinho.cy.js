describe('itens_carrinho', () => {
    beforeEach(() => {
        cy.visit('https://advantageonlineshopping.com/#/');

    })
    it('Verificar o(s) iten(s) no carrinho de compra', () => {
        // clicar na lupa de pesquisa
        cy.get('#mobileSearch > .roboto-medium').click();
        //digito Laptop no campo de pesquisa
        cy.get('#mobile_search').should('be.visible')
        cy.get('#mobileSearch > .roboto-medium').type('laptop')
        cy.get('#mobileSearch > .roboto-medium').click();
        //As opções de Laptops são exibidos"
        cy.contains('a', 'titleItemsCount ng-binding').should('be.visible')
        // Selecionar um produto"
        cy.contains('h1', 'roboto-regular ng-binding').should('be.visible')
        //Clicar no botão ADD TO CART"
        cy.get('.fixedBtn > .roboto-medium').click();
        //O produto é adicionado no carrinho com sucesso
        cy.get('menuCart').click();
        cy.title('h', 'roboto-regular center sticky fixedImportant ng-binding').should('eq',
            'SHOPPING CART')
    })
});