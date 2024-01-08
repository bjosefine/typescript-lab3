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
    cy.get("nav").contains("cartCounter").should("have.text", "1");
  }
);

Given("Jag går in på en ny produkt och kundvagnräknaren visar 1", () => {
  cy.visit("http://localhost:5173/products/2");
});
When("Jag klickar på Add to cart knappen igen", () => {
  cy.get("button").contains("Add to cart").click();
});
Then(
  "Produken ska läggas till i kundvagnen och kundvagnsräknaren visar 2",
  () => {
    cy.get("nav").contains(".cartCounter").should("have.text", "2");
  }
);

Given("Jag är inne på sidan och klickar på kundvagnen i menyn", () => {
  cy.visit("http://localhost:5173");
});
When("Jag klickar på kundvagnen", () => {
  cy.get("nav").contains("Cart").click();
});
Then("Jag kommer in på en sida som visar produkterna jag har lagt till", () => {
  cy.visit("http://localhost:5173/cart");
  cy.get("p").should("contain", "Ava T-shirt");
  cy.get("p").should("contain", "Lily Denim Jeans");
});
