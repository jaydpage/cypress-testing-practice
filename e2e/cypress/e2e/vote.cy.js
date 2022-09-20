describe('voting', () => {
  beforeEach(() => {
    cy.clearData()
  })

  it('increments the feature score when voting', () => {
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

  it('increments the feature score when others vote', () => {
    // Arrange
    const title = 'Everyone wants to vote for this one'
    cy.createRequest(title)
    cy.visitHomePage()
    cy.getFeatures().then((features) => {
      const id = features[0].id
      // Act
      cy.vote({ id, title, ipAddress: '192.168.1.1' })
      cy.visitHomePage()
      // Assert
      cy.getByAttribute('feature-score').hasText('2')

      cy.vote({ id, title, ipAddress: '192.168.1.2' })
      cy.visitHomePage()
      cy.getByAttribute('feature-score').hasText('3')
    })
  })
})
