import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductsInterface } from "../../interface/interface";
import { BackButton } from "../../components/BackButton";

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
      <BackButton to="profile" />

      <div className="flex flex-col justify-center items-center">
        <p className="font-secondary text-4xl tracking-tight text-start">
          Your cart
        </p>
        {cart.flat().map((product) => (
          <div
            key={product.productid}
            className="w-1/2 flex border-b border-gray-400"
          >
            <div className="flex">
              <img src={product.productimg} className="w-12" />
              <p>{product.productname}</p>
            </div>

            <div className="flex-grow">
              <p className="text-end">
                {product.productprice} <span>$</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
