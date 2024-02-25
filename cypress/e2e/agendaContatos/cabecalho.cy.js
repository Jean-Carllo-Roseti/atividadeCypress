/// <reference types="cypress" />

describe('Deve renderizar o cabeçalho', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar o titulo', () => {
        cy.get('header > h1').should('have.length', 1)
    })
})

