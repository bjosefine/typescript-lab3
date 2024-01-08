import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../../assets/icons/ArrowBackIcon";
import { CartContext } from "../../contexts/CartContext";
import { ProductsInterface } from "../../interface/interface";

export const UserCart = () => {
  const cartContext = useContext(CartContext);
  if (cartContext) {
    console.log(cartContext.cartProducts);
  }

  const [cart, setCart] = useState<ProductsInterface[]>([]);
  console.log({ cart });

  useEffect(() => {
    if (cartContext) {
      Promise.all(
        cartContext.cartProducts.map((productId) =>
          fetch(`/api/products/${productId}`).then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
        )
      )
        .then((results: ProductsInterface[]) => {
          setCart(results);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, [cartContext, cartContext?.cartProducts]);

  return (
    <>
      <div>
        <Link to="/profile">
          <ArrowBackIcon />
        </Link>
      </div>
      <div>
        {cart.flat().map((product) => (
          <div key={product.productid}>
            <p>{product.productname}</p>
          </div>
        ))}
      </div>
    </>
  );
};
