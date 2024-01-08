import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "Jag är inne på en produkt och vill gå tillbaka till alla produkterna",
  () => {
    cy.visit("http://localhost:5173/products/1");
  }
);
When("Jag klickar på bakåtpilen", () => {
  cy.get(".goBack").click();
});
Then("Kommer jag in på sidan som visar alla produkter", () => {
  cy.url().should("include", "/products");
});

Given("Jag är inne på cart och tillbaka till min profilsida", () => {
  cy.visit("http://localhost:5173/cart");
});
When("Jag klickar på tillbaka knappen", () => {
  cy.get(".goBack").click();
});
Then("Kommer jag in på min profilsida", () => {
  cy.url().should("include", "/profile");
});
