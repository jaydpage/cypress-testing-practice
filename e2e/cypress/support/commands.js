Cypress.Commands.add('getByAttribute', (element) => {
  return cy.get(`[data-cy="${element}"]`)
})

Cypress.Commands.add('clickElement', (element) => {
  return cy.get(`[data-cy="${element}"]`).click()
})

Cypress.Commands.add(
  'hasText',
  {
    prevSubject: 'optional',
  },
  (subject, text) => {
    const subjectValue = cy.wrap(subject)
    return subjectValue.should('have.text', text)
  },
)

Cypress.Commands.add(
  'hasValue',
  {
    prevSubject: 'optional',
  },
  (subject, value) => {
    const subjectValue = cy.wrap(subject)
    return subjectValue.should('have.value', value)
  },
)

Cypress.Commands.add(
  'typeText',
  {
    prevSubject: 'optional',
  },
  (subject, text) => {
    const subjectValue = cy.wrap(subject)
    return subjectValue.type(text).hasValue(text)
  },
)
