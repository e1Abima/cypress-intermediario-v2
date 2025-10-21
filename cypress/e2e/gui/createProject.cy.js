import { faker } from '@faker-js/faker'

describe('Create Project', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Sucesso', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`, // faker está criando um ID após nome (expressão Java)
            description: faker.random.words(5)
        }

        cy.gui_createProject(project)

        // abaixo está vaidando a base Url, o login efetuado (user_name) e nome do projeto criado
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})