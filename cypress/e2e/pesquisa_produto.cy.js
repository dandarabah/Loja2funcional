describe('pesquisa_produto', () => {
    beforeEach(() => {
        cy.visit('https://advantageonlineshopping.com/#/');

    })
    it('Deve preencher o campo de pesquisa e exibir o produto', () => {
        cy.get('div#mobileSearch').should('have.value', '');
        cy.get('menuSearch').click();
        cy.get('div#mobileSearch').type('laptop');
        cy.get('#mobileSearch > #menuSearch').click();
        cy.contains('h1','roboto-regular ng-binding').should('be.visible')
    })
});