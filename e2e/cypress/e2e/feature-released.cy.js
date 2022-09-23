describe('feature released', () => {
  beforeEach(() => {
    cy.clearData()
  })

  it('shows the feature as implemented', () => {
    // Arrange
    const feature = 'Please release this feature'
    cy.createRequest(feature)
    cy.visitHomePage()
    cy.getFeatures().then((features) => {
      const id = features.find((x) => x.title === feature).id
      // Act
      cy.getByAttribute('request-item-0').hasText(feature)
      cy.getByAttribute('feature-status').hasText('👍')
      cy.release({ id })
      cy.visitHomePage()
      // // Assert
      cy.getByAttribute('feature-status').hasText('✅')
    })
  })
})
