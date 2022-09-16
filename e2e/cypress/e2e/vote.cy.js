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

    // Act
    // Assert
  })
})
