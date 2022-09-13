describe('create request', () => {
  beforeEach(() => {
    cy.request(`/api/clearData`)
    cy.visit('/')
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

  it('has validation error when the request input is empty', () => {
    // Arrange
    // Act
    cy.clickElement('request-button')
    // Assert
    cy.getByAttribute('feature-input').hasInvalidValidationMessage(
      'Please fill in this field.',
    )
  })

  it('has validation error when the request input exceeds 150 characters', () => {
    const request =
      'This is a request that is too long and obtuse because it exceeds 150 characters and the validation should be triggered when the request exceeds 150 characters.'
    // Act
    const requestInput = cy.getByAttribute('feature-input')
    requestInput.type(request)
    cy.clickElement('request-button')
    // Assert
    cy.get('.toast').hasText('Max 150 characters please.')
  })
})
