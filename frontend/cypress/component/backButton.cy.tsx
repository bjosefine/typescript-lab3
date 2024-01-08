import { BackButton } from "../../src/components/BackButton";

describe("Back button component small TDD test", () => {
  it("Back button that goes to home `/` ", () => {
    cy.mount(<BackButton to="" />);
    cy.get(".goBack").click();
    cy.url().should("include", "/");
  });
  it("Back button that goes to product `/products` ", () => {
    cy.mount(<BackButton to="products" />);
    cy.get(".goBack").click();
    cy.url().should("include", "/products");
  });
  it("Back button that goes to profile `/profile` ", () => {
    cy.mount(<BackButton to="profile" />);
    cy.get(".goBack").click();
    cy.url().should("include", "/profile");
  });
});
