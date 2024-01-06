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
  it("Click on product and redirect to detailed product", () => {
    cy.visit("http://localhost:5173/products");
    cy.get("#productsList").first().click();
    cy.url().should("include", "/products/1");
  });
});
describe("Detailed product", () => {
  it("Render detailed product", () => {
    cy.visit("http://localhost:5173/products/1");
    cy.get("p").should("contain", "Ava T-shirt");
  });
});
