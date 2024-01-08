import { AddToCart } from "../../src/components/AddToCart";
import { CartContext } from "../../src/contexts/CartContext";

describe("Add to cart", () => {
  const productId = 1;

  beforeEach(() => {
    const setCartProducts = cy.stub().as("addToCart");
    cy.mount(
      <CartContext.Provider value={{ cartProducts: [], setCartProducts }}>
        <AddToCart productId={productId} />
      </CartContext.Provider>
    );
  });
  it("Render the Add to cart button", () => {
    cy.get("button").contains("Add to cart").should("exist");
  });
  it("Click the button retrive the productId as a prop and pass it to CartContext", () => {
    cy.get("button").contains("Add to cart").click();
    cy.get("@addToCart").should("have.been.calledWith", [productId]);
  });
});
