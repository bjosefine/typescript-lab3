import { useEffect, useContext, useState } from "react";
import { OrdersInterface } from "../../interface/interface";
import { UserContextInterface } from "../../contexts/Context";
import { UserContext } from "../../contexts/Context";

export const UserOrders = () => {
  const userContext = useContext(UserContext) as UserContextInterface;
  const { user } = userContext;
  const [orders, setOrders] = useState<OrdersInterface[]>([]);

  console.log({ user });
  console.log({ orders });

  const calculateTotalPricePerProduct = (
    products: { productPrice: number; productQuantity: number }[]
  ) => {
    return products.map((product) => {
      return {
        totalQuantity: product.productQuantity,
        totalPrice: product.productPrice * product.productQuantity,
      };
    });
  };

  const calculateTotalPrice = (
    products: { productPrice: number; productQuantity: number }[]
  ) => {
    let totalPrice = 0;
    Object.values(products).forEach((product) => {
      totalPrice += product.productPrice * product.productQuantity;
    });
    return totalPrice;
  };
  console.log(calculateTotalPrice);

  useEffect(() => {
    fetch(`/api/user/orders/${user?.userid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((result: OrdersInterface[]) => {
        setOrders(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [user?.userid]);

  return (
    <>
      <p className="font-secondary text-4xl tracking-tight text-center">
        Your orders
      </p>
      {orders.map((order) => (
        <div
          key={order.orderid}
          className="bg-black text-white w-64 gap-3 flex flex-col p-4 mb-4"
        >
          <p>Order ID: {order.orderid}</p>
          <p>
            Status: <span className="italic">{order.orderstatus}</span>
          </p>
          <p>Ordered: {new Date(order.createdat).toLocaleDateString()}</p>

          {order.products.map((product, index) => (
            <div key={index} className="pb-3 border-b flex w-full gap-1">
              <div>
                <img src={product.productImg} className="w-16" />
              </div>
              <div className="w-full">
                <p>{product.productName}</p>
                <p>Quantity: {product.productQuantity}</p>
                <p>
                  Price:{" "}
                  {calculateTotalPricePerProduct([product])[0].totalPrice}$
                </p>
              </div>
            </div>
          ))}
          <p>Total price: {calculateTotalPrice(order.products)} </p>
        </div>
      ))}
    </>
  );
};
