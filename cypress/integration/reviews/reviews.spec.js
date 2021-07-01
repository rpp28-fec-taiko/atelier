describe ('Reivews', () => {
  beforeEach(() => {
    cy.visit('http://34.225.154.204')
  });

  describe('More Reviews Btn', () => {
    it('should load 2 reviews at a time', () => {
      cy.get('.reviews-tile').should('have.length', 2)
      cy.contains('MORE REVIEWS').click();
      cy.get('.reviews-tile').should('have.length', 4)
    })
  })

  describe('Sort Dropdown', () => {
    it('should display relevant on load', () => {
      let sort = cy.get('#sortSelect');
      sort.should('have.value', 'relevant')

    //   sort.select('Helpful').should('have.value', 'helpful')
    //   let helpfulPara = cy.get('.reviews-tile-actions');
    //   let one = helpfulPara.children().first();
    //   let two = helpfulPara.children().last();
    // })

  })
})

