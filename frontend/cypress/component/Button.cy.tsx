import React from "react";
import { Button } from "../../src/components/Button";

describe("Button.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<Button label="Test" type="black" />);
  });
});
