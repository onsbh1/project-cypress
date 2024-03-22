import { When, Then } from "@badeball/cypress-cucumber-preprocessor";




    When("I get token", () => {
        cy.request({
            method: "POST",
            url: "http://backbase-identity-rec2.apps.ocp-uat.biat.int/auth/realms/biat-corporate/protocol/openid-connect/token",
            failOnStatusCode: false,
            form: true, // Set to true to use application/x-www-form-urlencoded content type
            body: {
              grant_type: "password",
              client_id: "bb-tooling-client",
              client_secret: "your_client_secret",
              username: "Stage.PFE",
              password: "ValueBIAT.24",
              scope: "openid",
            },
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }).then((response) => {
            // Check if the request was successful
            expect(response.status).to.eq(200);
            // Check if the response contains access_token property
            expect(response.body).to.have.property("access_token");
            cy.wrap(response.body.access_token).as("accessToken");
            // Check if the response contains refresh_token property
            expect(response.body).to.have.property("refresh_token");
            cy.wrap(response.body.refresh_token).as("refreshToken");
            // Set X-XSRF-TOKEN environment variable
            cy.getCookies("XSRF-TOKEN").then((cookie) => {
              cy.wrap(cookie.value).as("xsrfToken");
              });
          });
        
    });
    Then("I check token", () => {
        let token = window.localStorage.token;
        console.log(token);
    })
