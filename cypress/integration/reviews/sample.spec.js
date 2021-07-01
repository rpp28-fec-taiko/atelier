describe('My First Test', () => {
  it('Visits Atelier', () => {
    cy.visit('http://localhost:3000')

    cy.get('.reviews-tile').should('have.length', 2)
    cy.contains('MORE REVIEWS').click();
    cy.get('.reviews-tile').should('have.length', 4)
  })
})