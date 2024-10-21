describe('pesquisa_produto', () => {
    beforeEach(() => {
        cy.visit('https://advantageonlineshopping.com/#/');
        cy.wait(4000)
        cy.intercept('GET', 'https://www.advantageonlineshopping.com/api/v1/products/id', {
            statuscode: 200,
        }).as('stubGet')
    })


    it('Deve preencher o campo de pesquisa e exibir o produto', () => {
        //clico na lupa de pesquisa
        cy.get('#menuSearch').click();
        //digito Laptop no campo de pesquisa
        cy.get('#autoComplete').should('be.visible').type('laptop')
        cy.wait(3000)
        //as opções de Laptops são exibidos com sucesso
        cy.get('[href="#/product/6"] > img').click();
    })

    it('Verificar a lista de produtos conforme a busca', () => {
        //eu clico na lupa de pesquisa
        cy.get('#menuSearch').click();
        //digito Laptop no campo de pesquisa
        cy.get('#autoComplete').should('be.visible').type('laptop')
        cy.wait('@stubGet')
        //as opções de Laptops são exibidos com sucesso
        cy.get('[href="#/product/3"] > img').should('be.visible')

    })
});