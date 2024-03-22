import { should } from "chai";

class logout {
  elements = {
   UserNameLabel: () => cy.get(':nth-child(1) > .label-style'),
  DateLabel: () =>   cy.get(".bb-subheader"),
  Usernameinput: () => cy.get('#username'),
  passwordinput: () => cy.get(':nth-child(2) > .label-style'),
  CTAButtoninput: () => cy.get('#kc-login'), 
  clickusernameLabel: () =>  cy.get('.user-context-dropdown__selector'),
  clickontheuserlabel: () => cy.get('.user-context-dropdown__toggle > bb-icon-ui'),
  checklogoutbuttom: () => cy.get('bb-user-context-menu-dropdown > .dropdown-item'),
  
  } 

    CheckToasterSuccess_EN= (ASSISTANCE_TOASTER_SUCCESS_EN) => {
    this.elements.Toaster().as("Toaster");
    cy.get("@Toaster").should("contains.text",ASSISTANCE_TOASTER_SUCCESS_EN)
    };

    UserNameLabel= (UserNameLabel) => {
        this.elements.UserNameLabel().as("UserNameLabel");
        cy.get("@UserNameLabel").should("contains.text",UserNameLabel)
    };

   Usernameinput=() => {
        this.elements.Usernameinput().as("Usernameinput");
        cy.get("@Usernameinput") .should('have.attr','placeholder','Enter username');
      };
      
      passwordinput=() => {
        this.elements.passwordinput().as("passwordinput");
        cy.get("@passwordinput") .should('contain', 'Password');
      };
      
      CTAButtoninput=() => {
        this.elements.CTAButtoninput().as("CTAButtoninput");
        cy.get("@CTAButtoninput") .should('contain', 'Login').and('be.disabled');
      };

      clickusernameLabel=() => {
        this.elements.clickusernameLabel().as("clickusernameLabel");
        cy.get("@clickusernameLabel") .should('be.visible')
      };

      clickontheuserlabel=() => {
        this.elements.clickontheuserlabel().as("clickontheuserlabel");
        cy.get("@clickontheuserlabel").click()

      };

      checklogoutbuttom=() => {
        this.elements.checklogoutbuttom().as("hecklogoutbuttom");
        cy.get("@hecklogoutbuttom").should('be.visible')

      };
  
  
}
export default logout; 