describe('empty spec', () => {
  const url = 'http://localhost:3000'

  beforeEach(() => {
    cy.request(`${url}/api/clearData`)
  })

  it('creates a request and adds it to the list', () => {
    // Arrange
    const request = 'I would like to see tailwind css please'
    cy.visit(url)

    // Act
    const requestInput = cy.getByAttribute('feature-input')
    requestInput.typeText(request)
    
    cy.clickElement('request-button')

    // Assert
    requestInput.hasText('')
    validateAddedRequest(request)
  })

  function validateAddedRequest(request) {
    cy.getByAttribute('request-item-0').hasText(request)
    cy.getByAttribute('feature-status').hasText('👍')
    cy.getByAttribute('feature-score').hasText('1')
  }
})
