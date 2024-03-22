Feature: login to the Application
Background: Logging in
Given I open my biat corp login page 
Scenario: [MBC-297] :As a user of MyBIAT, I want to land on an authentification screen when I open the app

And I change to English formatting
When I check the login screen  
And I check the Username 
And I check the password 
And I check the CTA login button
And I Check the Forgot password
And I Check the Biat logo
And Type and check the "<password>"
And Type and check "<username>"
And Check the login button is inactive
And put "<secondpassword>" 
And clear username and check the button inactive 
Examples:
    | username                     |  password       | secondpassword |
    | Eya.Dimassi                |  ValueBIAT.2010 |         A         |


Scenario: [MBC-297] : login to the app 

When I connect to the app with credentials "<username>" and "<password>"


Examples:
    | username                     |  password       |
    | Eya.Dimassi                |  ValueBIAT.2010 | 




