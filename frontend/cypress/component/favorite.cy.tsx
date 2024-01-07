import React from "react";
import { AddToFavorite } from "../../src/components/AddToFavorite";
describe("Add to favorite TDD test", () => {
  const userId = 1;
  const productId = 1;

  it("Post favorite with the props passed", () => {
    const postSpy = cy.spy().as("postFavorite");
    cy.mount(
      <AddToFavorite userId={userId} productId={productId} onClick={postSpy} />
    );
    cy.get("button").contains("Add to favorite").click();
    expect(postSpy).to.have.been.calledWith(userId, productId);
  });
});
