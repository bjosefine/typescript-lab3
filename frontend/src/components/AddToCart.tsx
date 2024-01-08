import { Button } from "./Button";
import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

interface AddToCartProps {
  productId: number;
}

export const AddToCart: React.FC<AddToCartProps> = ({ productId }) => {
  const cartContext = useContext(CartContext);

  const handleAddToCart = () => {
    console.log("click");
    if (cartContext) {
      cartContext.setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        productId,
      ]);
    }
  };
  useEffect(() => {
    if (cartContext) {
      console.log(cartContext.cartProducts);
    }
  }, [cartContext]);
  return (
    <>
      <Button label="Add to cart" type="black" onClick={handleAddToCart} />
    </>
  );
};
