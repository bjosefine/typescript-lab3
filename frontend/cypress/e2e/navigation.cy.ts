describe("Navigation", () => {
  it("Render the navbar", () => {
    cy.visit("http://localhost:5173/");
    cy.get("nav").should("exist");
    cy.get("nav").contains("Home");
    cy.get("nav").contains("Products");
    cy.get("nav").contains("New");
    cy.get("nav").contains("Login");
  });
  it("Nav to products", () => {
    cy.visit("http://localhost:5173/");
    cy.get("nav").contains("Products").click();
    cy.url().should("include", "/products");
  });
  it("Nav to login", () => {
    cy.visit("http://localhost:5173/");
    cy.get("nav").contains("Login").click();
    cy.url().should("include", "/login");
  });
  it("Nav back to home", () => {
    cy.visit("http://localhost:5173/");
    cy.get("nav").contains("Home").click();
    cy.url().should("include", "/");
  });
});
