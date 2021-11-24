/// <reference types="cypress" />
// import 'cypress-iframe'


describe("Verify schedule section", () => {

    before(() => {
        cy.fixture('user_accounts').then(function (data) {
            const correctUserData = data.find(element => element.id === 1)
            const inorrectUserData = data.find(element => element.id === 2)
            globalThis.correctUser = correctUserData;
            globalThis.incorrectUser = inorrectUserData;
        })
        cy.navigateToLoginPage()

    });
    it("Employee can add shift for today", () => {
        cy.loginincorrectCredentials(incorrectUser)
        cy.loginCorrectCredentials(correctUser)
        cy.url().should('include', 'page/home')
        cy.wait(10)
        cy.get("[title=Schedule]").first().click()
        cy.url().should('include', 'page/schedule')
    });
});