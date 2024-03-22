import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
describe('tttt', () => {
  cy.visit('http://backbase-identity-rec2.apps.ocp-uat.biat.int/auth/realms/biat-corporate/protocol/openid-connect/auth?response_type=code&client_id=bb-web-client&state=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f&redirect_uri=http%3A%2F%2Fmybiat-corporate-web-backbase-application-rec2.apps.ocp-uat.biat.int%2Fen%2Fselect-context&scope=openid&code_challenge=-E9QC7WEgS2-vINES5ldnK8ifQcD6R_jJ-gEBxKLJNw&code_challenge_method=S256&nonce=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f');
});
Given ('I open my biat corp login page', () => {
  console.log("ici");
    cy.visit('http://backbase-identity-rec2.apps.ocp-uat.biat.int/auth/realms/biat-corporate/protocol/openid-connect/auth?response_type=code&client_id=bb-web-client&state=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f&redirect_uri=http%3A%2F%2Fmybiat-corporate-web-backbase-application-rec2.apps.ocp-uat.biat.int%2Fen%2Fselect-context&scope=openid&code_challenge=-E9QC7WEgS2-vINES5ldnK8ifQcD6R_jJ-gEBxKLJNw&code_challenge_method=S256&nonce=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f');
    });
    Then('I connect to the application with credentials {string} and {string}',(username,password) => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#kc-login').click();
      });
    
      Then('I verified that the language Frensh',() => {
        cy.get('.dropdown-icon').click();
        cy.get('.d-none').click();
        cy.get('.bb-navigation-item__link').should('be.visible');
    
      }) 
    
      Then('I Navigate to Cash Management menu',() => {
        cy.get('#bb-menu-header-button-0 > .bb-mega-menu__item-description')
        .click();
    
      }) 
    
      Then('I click on the manage transfer',() => {
        cy.get('.bb-mega-menu__item.show > .bb-mega-menu__submenu > .bb-mega-menu__submenu-items > :nth-child(1) > .bb-layout__horizontal-nav-link--active > .bb-mega-menu__submenu-item-label > .bb-mega-menu__submenu-title')
        .click();
    
      }) 
    
      Then('I check that empty screen named "Suivi des virements" is displayed',() => {
        cy.get('[routerlink="/CashManagement/Transfers/ManageTransfers"] > .bb-navigation-item__link > .bb-navigation-item__title').should('be.visible');
        cy.get('.bb-navigation-item--active > .bb-navigation-item__link > .bb-navigation-item__title').should('contain','Virement unitaire')
         cy.get('.bb-heading-widget__heading').should('contain','Virement unitaire')
         cy.get('.bb-navigation-item--active > .bb-navigation-item__link > .bb-navigation-item__title').should('contain','Virement unitaire')
         cy.get('.ng-select-container').should('contain', 'Sélectionner un compte')
         cy.get(':nth-child(3) > bb-fieldset-ui > .bb-fieldset > .bb-fieldset__heading').should('be.visible')
         cy.get(':nth-child(3) > bb-fieldset-ui > .bb-fieldset > .bb-fieldset__heading').should('contain', 'Compte bénéficiaire').and('be.visible');
         cy.get('#bb_input_0').should('contain', 'Numéro du compte bénéficiaire').and('be.visible')
         cy.get('div.titles-label > bb-fieldset-ui > .bb-fieldset > .bb-fieldset__heading').should('contain', 'Détails du paiement').and('be.visible');
         cy.get('#payord-amount__helper-label-0').should('contain', 'Montant').and('be.visible')
         cy.get('#bb_input_3__label').should('contain', 'Description').and('be.visible');
      
      }) 
    
   
    