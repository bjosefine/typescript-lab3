import { BackButton } from "../../src/components/BackButton";
import { BrowserRouter as Router } from "react-router-dom";

describe("Back button component small TDD test", () => {
  it("Back button that goes to home `/` ", () => {
    cy.mount(
      <Router>
        <BackButton to="" />
      </Router>
    );
    cy.get(".goBack").click();
    cy.url().should("include", "/");
  });
});
