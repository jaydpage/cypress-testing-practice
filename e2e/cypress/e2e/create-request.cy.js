describe('empty spec', () => {
  const url = 'http://localhost:3000'

  beforeEach(() => {
    cy.request(`${url}/api/clearData`)
    cy.visit(url)
  })

  it('creates a request and adds it to the list', () => {
    // Arrange
    const request = 'I would like to see tailwind css please'

    // Act
    const requestInput = cy.getByAttribute('feature-input')
    requestInput.typeText(request)

    cy.clickElement('request-button')

    // Assert
    requestInput.hasText('')
    cy.getByAttribute('request-item-0').hasText(request)
    cy.getByAttribute('feature-status').hasText('👍')
    cy.getByAttribute('feature-score').hasText('1')
  })

  it('creates a request and adds it to the list', () => {
    // Arrange
    // Act
    cy.clickElement('request-button')
    // Assert
    cy.getByAttribute('feature-input').hasInvalidValidationMessage(
      'Please fill out this field.',
    )
  })
})
