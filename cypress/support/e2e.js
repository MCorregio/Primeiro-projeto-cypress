

import './commands'

before(() => {
    cy.log('e2e.js - BEFORE - ALL') 
})  


after(() => {
    cy.log('e2e.js - AFTER ALL')
})