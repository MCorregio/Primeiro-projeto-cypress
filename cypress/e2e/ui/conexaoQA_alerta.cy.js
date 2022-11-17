import LoginPage from '../../pageObjects/LoginPage'

describe('alertas', () => {

    const login = new LoginPage()
    
    it('valida o aleta de senha invalida', { tags: 'smoke'}, () => {

        cy.clock()

        login.visitar()
        login.preencherEmail('teste@teste.com')
        login.preencherSenha(654321)
        login.submeter()

        cy.getElement('alert')
            .should('exist')
            .and('have.text', 'Credenciais inválidas')

        cy.tick(10000)

       
        cy.getElement('alert')
            .should('not.exist')
        
    })
    
})