describe('voting', () => {
  beforeEach(() => {
    cy.clearData()
  })

  it('creates a request and adds it to the list', () => {
    // Arrange
    cy.createRequest('Please vote for my request')
    cy.visitHomePage()
    cy.getByAttribute('feature-score').hasText('1')
    // Act
    cy.clickElement('feature-status')
    // Assert
    cy.getByAttribute('feature-score').hasText('2')
    cy.getByAttribute('feature-status').should('have.class', 'bg-green-100')
  })
})
