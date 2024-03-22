Feature: Api get token
Background: Logging in
Given I open my biat corp login page 
  Scenario: get api authentification token
    When I connect to the app with credentials "<username>" and "<password>"
    Then I get token
    And I check token
  


Examples:
    | username                     |  password       |
    | Stage.PFE                |  ValueBIAT.24| 