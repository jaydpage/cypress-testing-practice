describe('empty spec', () => {
  const url = 'http://localhost:3000'

  beforeEach(() => {
    cy.request(`${url}/api/clearData`)
  })

  it('creates a request and adds it to the list', () => {
    const request = 'I would like to see tailwind css please'

    // Visit website
    cy.visit(url)

    const requestInput = cy.get('[data-cy="feature-input"]')
    // Type the request into the input
    requestInput.type(request).should('have.value', request)

    // Click the request button
    cy.get('[data-cy="request-button"]').click()

    // Validate input is cleared
    requestInput.should('have.value', '')

    // Validate request was added
    cy.get('[data-cy="request-item-0"]').should('have.text', request)

    // TODO: validate vote (thumbs up)
    // TODO: validate vote count
  })
})
