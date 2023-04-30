/// <reference types="cypress" />

describe('App navigation', () => {
  it('checks Home-About-Form pages', () => {
    cy.visit('/');

    cy.get('.header').contains('About').click();

    cy.url().should('include', '/about-us');
    cy.get('.aboutUs').get('h1').contains('About Us');

    cy.get('.header').contains('Survey').click();
    cy.url().should('include', '/survey');
    cy.get('[data-testid="survey-h1"]').contains('Pls share with us your favorite animal');

    cy.get('.header').contains('Home').click();
    cy.url().should('include', '/');
    cy.get('.home-h1').contains('Search any photo at flickr!');
  });

  it('404 page exists', () => {
    cy.visit('/asdfds');

    cy.get('.notFound').should('exist');
  });

  it('return coverage', () => {
    expect(true).to.equal(true);
  });
});
