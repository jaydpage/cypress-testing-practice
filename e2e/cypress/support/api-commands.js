Cypress.Commands.add('createRequest', (title) => {
  return cy.request({
    method: 'POST',
    url: '/api/create',
    headers: {
      'x-forwarded-for': '192.168.0.1',
    },
    body: { title },
  })
})

Cypress.Commands.add('clearData', () => {
  return cy.request(`/api/clearData`)
})


