describe('Logoutt', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('lougot', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})