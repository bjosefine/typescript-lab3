describe("Homepage", () => {
  it("Render store name", () => {
    cy.visit("http://localhost:5173/");
    cy.get("p").contains("Store name").should("exist");
  });
  it("Click on shop now", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Shop now").click();
    cy.url().should("include", "/products");
  });
});
