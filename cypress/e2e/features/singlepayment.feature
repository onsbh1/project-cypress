Feature: Single payment 
Background:login to the app
Given I open my biat corp login page 
Scenario: [MBC-1699] : As a User MyBIAT , I want to acess the single payments list in Frensh 
When I connect to the application with credentials "<username>" and "<password>"
And I verified that the language Frensh 
And I Navigate to Cash Management menu 
And I click on the manage transfer
And I check that empty screen named "Suivi des virements" is displayed 
And I check the Menu 
And I check the Screen title 
And I Title of from account selector 
And I check the From account selector 
And I check the Title of To account selector 
And I check the Title of beneficiary field 
And I check the Title of account number beneficiary field 
And I check the title of Payment details section 
And I check the amount field
And I check the title of description field 


Examples:
    | Username                     |  password       |
    | Stage.PFE                    |  ValueBIAT.24   | 


