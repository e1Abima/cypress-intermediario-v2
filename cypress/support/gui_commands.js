// Cypress.Commands.add('login', (
//   user = Cypress.env('user_name'),
//   password = Cypress.env('user_password'),
// ) => {
//   const login = () => {
//     cy.visit('/users/sign_in')

//     cy.get("[data-qa-selector='login_field']").type(user)
//     cy.get("[data-qa-selector='password_field']").type(password, { log: false })
//     cy.get("[data-qa-selector='sign_in_button']").click()
//   }

//   login()
// })

// Substituido na aula 4 para integrar função de cache de sessão
Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  const options = {
    cacheAcrossSpecs: true,
  }

  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})
Cypress.Commands.add('logout', () => {
  cy.get('.header-user-dropdown-toggle').click()
  cy.wait(2000)
  cy.get('.sign-out-link').click()
})
Cypress.Commands.add('gui_createProject', project => {
  cy.visit('/projects/new')

  cy.get('#project_name').type(project.name) // nomeando como 'projeto'+ 'nome aleatório'
  cy.get('#project_description').type(project.description) // nomeando como 'projeto'+ 'descrição aleatório'
  cy.get('.qa-initialize-with-readme-checkbox').check()
  cy.contains('Create project').click()
})