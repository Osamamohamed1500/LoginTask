Feature: Login as tutor 

Background: User redirected to website 
Given user navigate to website

Scenario: Valid login as tutor
Given user enter valid user name 
When  click on next
Then username field should be disabled
When   enter valid password
When click on next
Then user login successfully


 Scenario: Login with invalid mail

Given user enter invalid mail address
 When click on next
Then error message appear 


Scenario: Login with valid mail and invalid password 

Given user enter valid user name 
When   click on next
When   user enter invalid password
When   click on next
Then   error message appear