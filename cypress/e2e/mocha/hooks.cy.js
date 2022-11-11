describe('DESCRIBE - testes de sites', () => {

    before(() => {
        cy.log('DESCRIBE - BEFOR  ALL')
    })

    beforeEach(() => {
        cy.log('DESCRIBE - BEFOR  EACHA')
    })

    after(() => {
        cy.log('DESCRIBE - AFTER  ALL')
    })

    afterEach(() => {
        cy.log('DESCRIBE - AFTER EACH')
    })

   
    context('CONTEXT 1 - pagina inicial', () => {

        before(() => {
            cy.log('CONTEXT 1 - BEFOR  ALL')
        })

        it('meu primeiro teste', () => {
        
            // cy.visit('https://iterasys.com.br/pt')
            cy.log('meu primeiro teste')
        })
        
        it('meu segundo teste', () => {
            // cy.visit('https://conexaoqa.herokuapp.com')
            cy.log('meu segundo teste')
        })   
    })
    context('CONTEXT 2 - cursos', () => {

        before(() => {
            cy.log('CONTEXT 2 - BEFOR  ALL')
        })

        it('meu terceiro teste', () => {
        
        })

        it('meu quarto teste', () => {
            cy.log('quarto teste') 
        })

        it('meu quinto teste', () => {
            cy.log('quinto teste') 
        })

        it('meu sexto teste', () => {
            cy.log('sexto teste') 
        })
    })
})
