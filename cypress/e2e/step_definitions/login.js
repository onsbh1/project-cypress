import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import login from '../../POM/login';
const Login = new login() 

Given ('I open my biat corp login page', () => {
    cy.visit('http://backbase-identity-rec2.apps.ocp-uat.biat.int/auth/realms/biat-corporate/protocol/openid-connect/auth?response_type=code&client_id=bb-web-client&state=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f&redirect_uri=http%3A%2F%2Fmybiat-corporate-web-backbase-application-rec2.apps.ocp-uat.biat.int%2Fen%2Fselect-context&scope=openid&code_challenge=-E9QC7WEgS2-vINES5ldnK8ifQcD6R_jJ-gEBxKLJNw&code_challenge_method=S256&nonce=S3JwNlNZd2pnMlF5U3AucnRSUl9MRlltTHVPZzVSdWhEVEw5Zy5xTjJZYi5f');
    })
    
    Then ('I check the login screen', () => {
      //  cy.get(':nth-child(1) > .label-style').should('contain', 'Username');
    Login.CheckLabelName()
        })
    
    Then ('I change to English formatting', () => {
        
        cy.viewport(1500,1200);
        //cy.get('#kc-current-locale-link').trigger('mouseover');
        //  cy.get('div#kc-locale-dropdown ul li.kc-dropdown-item:first-child a').click(); 
        cy.get('#kc-current-locale-link')
        .trigger('mouseover')
        cy.get('div#kc-locale-dropdown ul li.kc-dropdown-item:first-child a').click({ force: true });
    });

    Then('I check the Username', () => {
       // cy.get('#username').should('have.attr','placeholder','Enter username');
       Login.CheckNameinput()
    });

    Then('I check the password',() =>{ 
        //cy.get(':nth-child(2) > .label-style').should('contain', 'Password');
        //cy.get('#password').should('have.attr','placeholder','Enter password');
    Login.passwordinput () 
    }) ;

    Then('I check the CTA login button',() => {
        //cy.get('#kc-login').should('contain', 'Login').and('be.disabled');
    Login.ButtonCTAinput()

    })

    Then('I Check the Forgot password',() => {
        //cy.get('.link-orange').should('contain', 'Forgot password ?')
    Login.ChecktheForgotpasswordLabel()
    })

    Then('I Check the Biat logo',() => {
        //cy.get('.brand').should('exist').and('be.visible');
    Login.Biatlogo()
    }) 

    Then('Type and check the {string}',(password) => {
       // cy.get('#password').type(password)
       // .should('have.attr', 'type', 'password');
       // cy.get('#eye').click ()
       // cy.get('#password').invoke('attr', 'type').should('eq', 'text');
        ///cy.get('#eye').click()
        //cy.get('#password').invoke('attr', 'type').should('eq', 'password')
        //cy.get('#password').clear() 
    Login.Checkpasswordinput()
    })
    
    Then('Type and check {string}',(username) => {
       // cy.get('#username').type(username)
    Login.Typeusernameinput()
      
    }) 

    Then('Check the login button is inactive',() => {
    //cy.get('#kc-login').should('be.disabled');
    Login.loginbottun()
    }) 

    Then('put {string}',(secondpassword) => {
        //cy.get('#password').type(secondpassword) 
        //.should('have.attr', 'type', 'password').and('be.enabled');
        Login.Secondpasswordinput()
    }) 

    Then('clear username and check the button inactive',() => {
       // cy.get('#username').clear()
        //cy.get('#kc-login').should('contain', 'Login').and('be.disabled');
    Login.clearusernameLabel()
    })
    
    
    Then('I connect to the app with credentials {string} and {string}',(username,password) => {
       // cy.get('#username').type(username)
        Login.typeusername
       // cy.get('#password').type(password) 
        Login.typepassword
       // cy.get('#kc-login').click()
        Login.Loggininput
    }) 



    
       
        

            
        

        
       