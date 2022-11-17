// eslint-disable-next-line
/// <reference path="index.d.ts"/> 

import registerCypressGrep from 'cypress-grep'
registerCypressGrep()

import './commands'

before(() => {
    cy.log('e2e.js - BEFORE - ALL') 
})  


after(() => {
    cy.log('e2e.js - AFTER ALL')
})