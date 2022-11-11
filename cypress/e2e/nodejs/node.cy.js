

describe('Teste do cypress.config.js', () => {
   
    it('teste de mensagem no consolo - browser', () => {
        console.log('teste de mensagem no browser')
    })
    
    it('teste de task ', () => {
        cy.task('msgConsole')
    })  

    it('conta o total de arquivos da pasta API', () => {
        cy.task('lerPasta')
    })
})