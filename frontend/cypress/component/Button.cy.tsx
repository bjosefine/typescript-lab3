import React from "react";
import { Button } from "../../src/components/Button";
import { ArrowIcon } from "../../src/assets/icons/ArrowIcon";
describe("Button.cy.tsx", () => {
  it("Button type black", () => {
    cy.mount(<Button label="Test type black" type="black" />);
    // Base styling
    cy.get("button").should(
      "have.class",
      `uppercase border border-black py-3 px-3 w-52`
    );
    // Type black styling
    cy.get("button").should("have.class", `bg-black text-white`);
  });
  it("Button type white", () => {
    cy.mount(<Button label="Test type white" type="white" />);
    // Base styling
    cy.get("button").should(
      "have.class",
      `uppercase border border-black py-3 px-3 w-52`
    );
    // Type white styling
    cy.get("button").should("have.class", `bg-white text-black`);
  });
  it("Button type header", () => {
    cy.mount(<Button label="Test type header" type="header" />);
    // Base styling
    cy.get("button").should(
      "have.class",
      `uppercase border border-black py-3 px-3 w-52`
    );
    // Type header styling
    cy.get("button").should("have.class", `bg-black text-white border-white`);
  });
  it("Button with icon", () => {
    cy.mount(
      <Button label="Test with icon" type="header" icon={<ArrowIcon />} />
    );
    // Base styling
    cy.get("button").should(
      "have.class",
      `uppercase border border-black py-3 px-3 w-52`
    );
    // Icon styling
    cy.get("button").should("have.class", `flex justify-between items-center`);
    // Type header styling
    cy.get("button").should("have.class", `bg-black text-white border-white`);
  });
  it("Test onClick", () => {
    const onClick = cy.stub();
    cy.mount(<Button label="Test onClick" type="black" onClick={onClick} />);
    cy.get("button").click();
    cy.wrap(onClick).should("have.been.calledOnce");
  });
});
