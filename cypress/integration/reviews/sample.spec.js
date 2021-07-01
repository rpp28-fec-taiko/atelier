describe('My First Test', () => {
  it('Visits Atelier', () => {
    cy.visit('http://34.225.154.204')

    cy.get('.reviews-tile').should('have.length', 2)
    cy.contains('MORE REVIEWS').click();
    cy.get('.reviews-tile').should('have.length', 4)
  })
})