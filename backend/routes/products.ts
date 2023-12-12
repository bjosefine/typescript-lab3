import express from "express";
const router = express.Router();
import client from "../connection";

router.get("/products", async (_request, response) => {
  try {
    const { rows } = await client.query("SELECT * FROM product");
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

export default router;
