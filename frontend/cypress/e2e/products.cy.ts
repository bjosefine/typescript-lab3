describe("Products", () => {
  it("Render products", () => {
    cy.visit("http://localhost:5173/products");
    cy.get("p").should("contain", "Products");
    cy.get("#productsList").should("contain", "Ava T-shirt");
  });
  it("Load more products", () => {
    cy.visit("http://localhost:5173/products");
    cy.get("button:contains('Load more')").click();
  });
  it("Filter button", () => {
    cy.visit("http://localhost:5173/products");
    cy.get(".DropdownButton").should("exist").click();
  });
});
