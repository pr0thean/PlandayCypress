


Cypress.Commands.add("navigateToLoginPage", () => {
    cy.visit("/")
    cy.get('.button-success').click()
})

Cypress.Commands.add("loginincorrectCredentials", (user) => {
    const errorMessage = "The username or password is incorrect."
    cy.get("#Username").clear().type(user.email)
    cy.get("#Password").clear().type(user.password)
    cy.get("#MainLoginButton").click()
    cy.get("#Password-validation-error").should('include.text', errorMessage)
})

Cypress.Commands.add("loginCorrectCredentials", (user) => {
    cy.get("#Username").clear().type(user.email)
    cy.get("#Password").clear().type(user.password)
    cy.get("#MainLoginButton").click()
})

Cypress.Commands.add("logout", () => {
    cy.get("a[href='/signout']").click()
    cy.get('[title=Employee]').trigger('mouseover')
    cy.get("a[href='/signout']").invoke('show').click()

})

Cypress.Commands.add("addPhoneNumberPeopleEmployeeModal", (employeeName, phoneNumber) => {
})