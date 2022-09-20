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

  it('features are sorted by score descending', () => {
    // Arrange
    const feature1 = 'feature 1'
    const feature2 = 'feature 2'
    const feature3 = 'feature 3'
    cy.createRequest(feature1)
    cy.createRequest(feature2)
    cy.createRequest(feature3)
    cy.visitHomePage()
    cy.getFeatures().then((features) => {
      const id2 = features.find((x) => x.title === feature2).id
      const id3 = features.find((x) => x.title === feature3).id
      // Act
      cy.getByAttribute('request-item-0').hasText(feature1)
      cy.getByAttribute('request-item-1').hasText(feature2)
      cy.getByAttribute('request-item-2').hasText(feature3)

      cy.vote({ id: id3, title: feature3, ipAddress: '192.168.1.1' })
      cy.visitHomePage()
      // Assert
      cy.getByAttribute('request-item-0').hasText(feature3)
      cy.getByAttribute('request-item-1').hasText(feature1)
      cy.getByAttribute('request-item-2').hasText(feature2)

      cy.vote({ id: id2, title: feature2, ipAddress: '192.168.1.1' })
      cy.vote({ id: id2, title: feature2, ipAddress: '192.168.1.2' })
      cy.visitHomePage()

      cy.getByAttribute('request-item-0').hasText(feature2)
      cy.getByAttribute('request-item-1').hasText(feature3)
      cy.getByAttribute('request-item-2').hasText(feature1)
    })
  })
})
