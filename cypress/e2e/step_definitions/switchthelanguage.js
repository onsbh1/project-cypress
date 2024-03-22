import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
Given ('I open web site 3', () => {
    cy.visit('http://backbase-identity-rec2.apps.ocp-uat.biat.int/auth/realms/biat-corporate/protocol/openid-connect/auth?response_type=code&client_id=bb-web-client&state=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f&redirect_uri=http%3A%2F%2Fmybiat-corporate-web-backbase-application-rec2.apps.ocp-uat.biat.int%2Fen%2Fselect-context&scope=openid&code_challenge=-E9QC7WEgS2-vINES5ldnK8ifQcD6R_jJ-gEBxKLJNw&code_challenge_method=S256&nonce=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f');
    })

    Then ('I ChooseEnglishformatting' = () => {
        cy.get("#navbarDropdown3").then(($element) => {
          const selectedLanguage = $element.text().trim();
          if (selectedLanguage.includes("Français")) {
            // Change the language to English
        cy.get(".dropdown-icon").click();
        cy.get(".biat-div-wrapper > .dropdown-item")
        .contains("English")
        .click({ force: true });
            // Leave the page in French.
          } 
        else if (selectedLanguage.includes("English")) {
        cy.log("La langue sélectionnée est englais.");
          }
        })
    }) 
    

 


   


