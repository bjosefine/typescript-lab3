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
          className="bg-orange-300 w-64 gap-3 flex flex-col p-4 mb-4"
        >
          <p>Order ID: {order.orderid}</p>
          <p>Status {order.orderstatus}</p>
          <p>Ordered {order.createdat}</p>
          <ul>
            {order.products.map((product, index) => (
              <li key={index}>
                <p>Product Name: {product.productName}</p>
                <p>Product Quantity: {product.productQuantity}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
