import React from "react";
import { AddToFavorite } from "../../src/components/AddToFavorite";
describe("Add to favorite TDD test", () => {
  const userId = 1;
  const productId = 1;

  it("Post favorite with the props passed", () => {
    cy.intercept("POST", "/api/favorites", (request) => {
      expect(request.body).to.include({ userid: userId, productid: productId });
      request.reply({ statusCode: 200, body: { message: "Favorite added" } });
    }).as("addFavorite");
    cy.mount(<AddToFavorite userId={userId} productId={productId} />);
    cy.get("button").contains("Add to favorite").click();
  });
});
