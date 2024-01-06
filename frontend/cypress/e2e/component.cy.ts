import { mount } from "@cypress/react";
import { Button } from "../../src/components/Button";
describe("Button component", () => {
  it("Mount it", () => {
    mount(<Button label="test" type="black" />);
    cy.get("button").click();
  });
});
