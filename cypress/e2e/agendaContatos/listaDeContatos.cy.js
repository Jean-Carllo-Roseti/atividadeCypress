/// <reference types="cypress" />

describe('Teste de função botões da lista de contatos', () => {

    it('Teste o processo de Edição.', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').should('have.value', 'gian Souza').clear()
        cy.get('input[placeholder="E-mail"]').should('have.value', 'gian@ebac.com.br').clear()
        cy.get('input[placeholder="Telefone"]').should('have.value', '11912345678').clear()
        cy.get('input[placeholder="Nome"]').type('Ramon Oliveira')
        cy.get('input[placeholder="E-mail"]').type('RamonOliveira@gmail.com.br')
        cy.get('input[placeholder="Telefone"]').type('11912345471')
        cy.get('.alterar').click()
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain', 'Ramon Oliveira')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('contain', '11912345471')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should('contain', 'RamonOliveira@gmail.com.br')
    })
})

