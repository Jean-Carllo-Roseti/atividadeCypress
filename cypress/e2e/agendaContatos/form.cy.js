/// <reference types="cypress" />

describe('Teste de função adicioanr e Excluir', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Teste Adcição de contato', () => {
        cy.get('input[placeholder="Nome"]').type('Jorge Campos')
        cy.get('input[placeholder="E-mail"]').type('Jorge_Campos@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('(13) 99411-2564')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 4)
    })
    
    it('Teste do botão Deletar', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3)
    })
})




