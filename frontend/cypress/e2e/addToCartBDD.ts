import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Jag är inne på en produkt och kundvagnsräknaren visar 0", () => {
  cy.visit("http://localhost:5173/products/1");
});
When("Jag klickar på knappen Add to cart", () => {
  cy.get("button").contains("Add to cart").click();
});
Then(
  "Produken ska läggas till i kundvagnen och kundvagnsräknaren ska visa 1",
  () => {
    cy.get(".cartCounter").should("have.text", "1");
  }
);

Given("Jag har lagt till första produken", () => {
  cy.visit("http://localhost:5173/products/1");
  cy.get("button").contains("Add to cart").click();
});
When("Jag går till en ny product och lägger till den", () => {
  cy.get("button").contains("Add to cart").click();
});
Then(
  "Produken ska läggas till i kundvagnen och kundvagnsräknaren visar 2",
  () => {
    cy.get(".cartCounter").should("have.text", "2");
  }
);

Given("Jag lägger till en produkt och klickar på kundvagnen i menyn", () => {
  cy.visit("http://localhost:5173/products/1");
  cy.get("button").contains("Add to cart").click();
});
When("Jag klickar på kundvagnen", () => {
  cy.get("nav").contains("Cart").click();
});
Then("Jag kommer in på en sida som visar produkterna jag har lagt till", () => {
  cy.get("p").should("contain", "Ava T-shirt");
});
