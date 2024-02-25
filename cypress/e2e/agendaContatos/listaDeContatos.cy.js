/// <reference types="cypress" />

describe('Teste de função botões da lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    })

    it('Teste o processo de Edição.', () => {
        cy.get('input[placeholder="Nome"]').should('have.value', 'gian Souza')
        cy.get('input[placeholder="E-mail"]').should('have.value', 'gian@ebac.com.br')
        cy.get('input[placeholder="Telefone"]').should('have.value', '11912345678')

    })
    it('Teste Salvar', () => {
        cy.get('input[placeholder="Nome"]').clear().type('Ramon Oliveira')
        cy.get('input[placeholder="E-mail"]').clear().type('RamonOliveira@gmail.com.br')
        cy.get('input[placeholder="Telefone"]').clear().type('11912345471')
        cy.get('.alterar').click()
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain', 'Ramon Oliveira')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('contain', '11912345471')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should('contain', 'RamonOliveira@gmail.com.br')
    })

    it('Teste do cancel.', () => {
        cy.get('.cancelar').click()
        cy.get('input[placeholder="Nome"]').should('have.value', '').clear()
        cy.get('input[placeholder="E-mail"]').should('have.value', '').clear()
        cy.get('input[placeholder="Telefone"]').should('have.value', '').clear()
    })
    it('Reinicio do teste', () => {
        cy.get('input[placeholder="Nome"]').clear().type('gian Souza')
        cy.get('input[placeholder="E-mail"]').clear().type('gian@ebac.com.br')
        cy.get('input[placeholder="Telefone"]').clear().type('11912345678')
        cy.get('.alterar').click()
    })
})

