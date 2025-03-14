describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Exibe a saudação "Hi, there" quando nenhum nome é fornecido', () => {
    cy.get('input[data-testid="name"]').clear()
    cy.contains('h2','Hi there!').should('be.visible')
  })

  it('Exibe a saudação "Hi, Joe" quando o nome é fornecido', () => {
    cy.get('input[data-testid="name"]').clear().type('Joe')
    cy.contains('h2','Hi Joe!').should('be.visible')
  })

  it('Abre e fecha o messenger ', () => {
    cy.get('button[class*=Messenger]').first().should('be.visible').click()
    cy.contains('How can we help you?').should('be.visible')
    cy.get('button[class*=Messenger]').last().should('be.visible').click()
    cy.get('div[class*=Messenger_box]').should('not.exist')
  })
})