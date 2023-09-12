/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Teste de inclusão', () => {
        cy.get('[type="text"]').type('gian souza')
        cy.get('[type="email"]').type('giansouza@teste.com')
        cy.get('[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()
    })

    it('Teste de edição do contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="tel"]').type('11 87654321')
        cy.get('.alterar').click()
    })

    it('Teste de exclusão de contato', () => {
        cy.get('.delete')
    })
})