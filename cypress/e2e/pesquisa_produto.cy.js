describe('pesquisa_produto', () => {
    beforeEach(() => {
        cy.visit('https://advantageonlineshopping.com/#/');
        cy.intercept('GET', 'https://www.advantageonlineshopping.com/api/v1/products/id', {
            statuscode: 200,
        }).as('stubGet')
    })
})

it('Deve preencher o campo de pesquisa e exibir o produto', () => {
    cy.get('div#mobileSearch').should('have.value', '')
    cy.wait(4000)
    cy.get('#menuSearch').click();
    cy.get('div#mobileSearch').type('laptop')
    cy.get('#mobileSearch > #menuSearch').click();
    cy.contains('h1', 'roboto-regular ng-binding').should('be.visible')
})

it('Verificar a lista de produtos conforme a busca', () => {
    cy.get('#menuSearch').click();
    cy.get('div#mobileSearch').type('laptop');
    cy.wait(4000)
    cy.wait('@stubGet')
    cy.contains('a', 'select  ng-binding').should('be.visible')
});