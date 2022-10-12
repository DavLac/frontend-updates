describe('Loading training page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/trainings')
  })
  it('useState section testing', () => {
    cy.get('h3').contains('useState')
    cy.contains('Hello world (isValid)')
    cy.contains('Change validity').click()
    cy.contains('Hello world (isNotValid)')
  })
})