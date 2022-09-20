describe('voting', () => {
  beforeEach(() => {
    cy.request(`/api/clearData`)
  })

  it('creates a request and adds it to the list', () => {
    // Arrange
    const options = {
      method: 'POST',
      url: '/api/create',
      headers: {
        'x-forwarded-for': '192.168.0.1',
      },
      body: { title: 'Please vote for my request' },
    }
    cy.request(options)
    cy.visit('/')
    cy.getByAttribute('feature-score').hasText('1')
    // Act
    cy.clickElement('feature-status')
    // Assert
    cy.getByAttribute('feature-score').hasText('2')
    cy.getByAttribute('feature-status').should('have.class', 'bg-green-100')
  })
})
