import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


Given(/^user navigate to website$/ ,() =>{

cy.visit('https://accounts.sabboura.com/')
cy.url().should('include','accounts')
})


Given(/^user enter valid user name$/,()=>{
cy.get('#username').type('testing@sabboura.com')
})

When(/^click on next$/,()=>{
    cy.get('#btn-verify').click()

})

Then(/^username field should be disabled$/,()=>{

cy.get('#password').should('be.visible')
cy.get('#username').should('be.disabled')
    
})

When(/^enter valid password$/,()=>{
    cy.get('#password').type('123456')
})
Then(/^user login successfully$/,()=>{

    cy.url().should('include','tutors.sabboura')
    cy.contains('Users').should('be.visible')

})
// ---------------------------------------------------------------------------------------------------

Given(/^user enter invalid mail address$/,()=>{
    cy.get('#username').type('testin3232g@sabboura.com')
})


Then(/^error message appear$/,()=>{

    cy.contains('Invalid login information').should('be.visible')
})
// ---------------------------------------------------------------------------------------------------

When(/^user enter invalid password$/,()=>{

    cy.get('#password').type('1234563')
   

})



