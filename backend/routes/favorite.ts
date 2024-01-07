import express from "express";
const router = express.Router();
import client from "../connection";

router.get("/favorites", async (_request, response) => {
  try {
    const { rows } = await client.query(`
    SELECT
    favorite.favoriteId,
    favorite.userId,
    product.productId,
    product.productName,
    product.productPrice,
    product.productImg,
    product.productMaterial
    FROM favorite
    INNER JOIN product ON favorite.productId = product.productId;
  `);
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.get("/favorites/:userId", async (request, response) => {
  const { userId } = request.params;
  try {
    const { rows } = await client.query(
      `
    SELECT
    favorite.favoriteId,
    favorite.userId,
    product.productId,
    product.productName,
    product.productPrice,
    product.productImg,
    product.productMaterial
    FROM favorite
    INNER JOIN product ON favorite.productId = product.productId
    WHERE (favorite.userId = $1)
    `,
      [userId]
    );
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.post("/favorites", async (request, response) => {
  try {
    let userid = request.body.userid;
    let productid = request.body.productid;

    await client.query(
      `INSERT INTO favorite(userId, productId)
      VALUES ($1, $2)`,
      [userid, productid]
    );
    const { rows } = await client.query("SELECT * FROM favorite");
    response.status(201).send(rows);
  } catch (error) {
    console.error(error);
    response.status(500).send("FAIL");
  }
});

router.delete("/favorites/:userId/:productId", async (request, response) => {
  const { userId, productId } = request.params;
  try {
    await client.query(
      `DELETE FROM favorite WHERE userId = $1 AND productId = $2`,
      [userId, productId]
    );
    response.status(200).send({ message: "yay deleted" });
  } catch (error) {
    console.error(error);
    response.status(500).send("FAIL");
  }
});

export default router;
