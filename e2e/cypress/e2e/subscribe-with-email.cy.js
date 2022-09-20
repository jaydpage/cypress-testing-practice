describe('subscribe with email', () => {
  beforeEach(() => {
    cy.visitHomePage()
  })

  it('displays success toast when email subscription is successful', () => {
    // Arrange
    const emailAddress = 'jaydpage+cypresstests@gmail.com'
    // Act
    const emailInput = cy.getByAttribute('email-input')
    emailInput.typeText(emailAddress)

    cy.clickElement('email-ok-button')
    // Assert
    emailInput.hasText('')
    cy.get('.toast').hasText('You are now subscribed to feature updates!')
  })

  it('has validation error when email address is invalid', () => {
    // Arrange
    // Act
    cy.clickElement('email-ok-button')
    // Assert
    cy.getByAttribute('email-input').hasInvalidValidationMessage(
      `Please fill in this field.`,
    )
    
    cy.getByAttribute('email-input').typeText('jaydpage')
    cy.getByAttribute('email-input').hasInvalidValidationMessage(
      `Please include an '@' in the email address. 'jaydpage' is missing an '@'.`,
    )

    cy.getByAttribute('email-input').typeText('jaydpage@')
    cy.getByAttribute('email-input').hasInvalidValidationMessage(
      `Please enter a part following '@'. 'jaydpage@' is incomplete.`,
    )
  })
})
