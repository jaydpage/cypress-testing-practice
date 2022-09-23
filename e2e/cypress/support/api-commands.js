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

Cypress.Commands.add('vote', ({ id, title, ipAddress }) => {
  return cy.request({
    method: 'POST',
    url: '/api/vote',
    headers: {
      'x-forwarded-for': ipAddress,
    },
    body: { id, title },
  })
})

Cypress.Commands.add('release', ({ id }) => {
  return cy.request({
    method: 'POST',
    url: '/api/release',
    body: { id },
  })
})

Cypress.Commands.add('getFeatures', () => {
  return cy
    .request({
      method: 'GET',
      url: '/api/features',
    })
    .then(({ body }) => {
      return cy.wrap(body.features)
    })
})

Cypress.Commands.add('clearData', () => {
  return cy.request(`/api/clearData`)
})
