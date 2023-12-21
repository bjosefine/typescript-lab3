import express from "express";
const router = express.Router();
import client from "../connection";

router.get("/orders", async (_request, response) => {
  try {
    const { rows } = await client.query(`
    SELECT 
    orderInfo.orderId,
    orderInfo.orderUser,
    orderStatus.statusName as orderStatus,
    orderInfo.createdAt,
    product.productName as productName, 
    orderProduct.quantity as productQuantity
    FROM orderInfo
    INNER JOIN orderStatus ON orderInfo.orderStatus = orderStatus.statusId
    INNER JOIN orderProduct ON orderInfo.orderId = orderProduct.orderId
    INNER JOIN product ON orderProduct.productId = product.productId
  `);
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.get("/orders/:ordersId", async (request, response) => {
  const { ordersId } = request.params;
  try {
    const { rows } = await client.query(
      `
      SELECT 
      orderInfo.orderId,
      orderInfo.orderUser,
      orderStatus.statusName as orderStatus,
      orderInfo.createdAt,
      product.productName as productName, 
      orderProduct.quantity as productQuantity
      FROM orderInfo
      INNER JOIN orderStatus ON orderInfo.orderStatus = orderStatus.statusId
      INNER JOIN orderProduct ON orderInfo.orderId = orderProduct.orderId
      INNER JOIN product ON orderProduct.productId = product.productId
      WHERE (orderInfo.orderId = $1)
    `,
      [ordersId]
    );
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.get("/user/orders/:userId", async (request, response) => {
  const { userId } = request.params;
  try {
    const { rows } = await client.query(
      `
      SELECT 
      orderInfo.orderId,
      orderStatus.statusName as orderStatus,
      orderInfo.createdAt,
      array_agg(
        json_build_object(
          'productName', product.productName,
          'productImg', product.productImg,
          'productPrice', product.productPrice,
          'productQuantity', orderProduct.quantity
        )
      ) as products
    FROM orderInfo
    INNER JOIN orderStatus ON orderInfo.orderStatus = orderStatus.statusId
    INNER JOIN orderProduct ON orderInfo.orderId = orderProduct.orderId
    INNER JOIN product ON orderProduct.productId = product.productId
    WHERE (orderInfo.orderUser = $1)
    GROUP BY orderInfo.orderId, orderStatus.statusName, orderInfo.createdAt
    `,
      [userId]
    );
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

export default router;
