import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import logout from '../../POM/logout';
const Logout = new logout() 

Given ('I open web site 2', () => {
    cy.visit('http://backbase-identity-rec2.apps.ocp-uat.biat.int/auth/realms/biat-corporate/protocol/openid-connect/auth?response_type=code&client_id=bb-web-client&state=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f&redirect_uri=http%3A%2F%2Fmybiat-corporate-web-backbase-application-rec2.apps.ocp-uat.biat.int%2Fen%2Fselect-context&scope=openid&code_challenge=-E9QC7WEgS2-vINES5ldnK8ifQcD6R_jJ-gEBxKLJNw&code_challenge_method=S256&nonce=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f');
    })

    Then ('Ichange the app to English formatting', () => {
        cy.viewport(1500,1200);
      cy.get('#kc-current-locale-link')
      .trigger('mouseover')
     //  cy.get('div#kc-locale-dropdown ul li.kc-dropdown-item:first-child a').click({ force: true });
     Logout.CheckToasterSuccess_EN()
    });

    Then ('I Check if the login page is displayed', () => {
       // cy.get(':nth-child(1) > .label-style').should('contain', 'Username');
        Logout.UserNameLabel() 

    }) 

    Then ('I connecte to the app', () => {
        //cy.get('#username').type('Eya.Dimassi')
        Logout.Usernameinput()
        //cy.get('#password').type('ValueBIAT.2010')
        Logout. passwordinput()
        //cy.get('#kc-login').click()
        Logout.CTAButtoninput()
    })

    Then ('I click on the username', () => {
        //cy.get('.user-context-dropdown__selector').should('be.visible')
        Logout.clickusernameLabel()
        cy.get('.user-context-dropdown__toggle > bb-icon-ui').click()
        Logout.clickontheuserlabel()
    })
    Then('I check the logout buttom',() => { 
        cy.get('bb-user-context-menu-dropdown > .dropdown-item').should('be.visible')
        Logout.checklogoutbuttom()
    })

    Then('I click on the logout buttom',() => { 
        cy.get('bb-user-context-menu-dropdown > .dropdown-item').click()
    })
    
    Then('I Click on the buttom yes', () => {
        cy.get('.btn-yes').click() 
    })

    Then ('I check that the user is redirected to the login screen', () => {
        cy.get(':nth-child(1) > .label-style').should('contain', 'Username');
        }) 

    Then ('I check that fileds on the login screen is empty', () => {
        cy.get('#username').should("have.value", "");
        cy.get('#password').should("have.value", "");
    })

    
    
    
    
    
    
    




    
    

   


    