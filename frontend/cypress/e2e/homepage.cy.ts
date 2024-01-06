describe("Test to see if homepage renders", () => {
  it("Render store name", () => {
    cy.visit("http://localhost:5173/");
    cy.get("p").contains("Store name").should("exist");
  });
});
