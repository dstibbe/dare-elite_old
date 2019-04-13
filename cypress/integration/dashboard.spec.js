/// <reference types="cypress" /> 

import Chance from 'chance';
const chance = new Chance();

describe('dashboard page', () => {

    const email = chance.email();
    const pass = 'ValidPassword23';

    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('has a title', () => {
        cy.contains('Dare-solutions');
    });

});