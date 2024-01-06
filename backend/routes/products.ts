import express from "express";
const router = express.Router();
import client from "../connection";

router.get("/products", async (_request, response) => {
  try {
    const { rows } = await client.query(`
    SELECT 
      productId, 
      productName, 
      productPrice, 
      productImg, 
      productMaterial, 
      category.categoryName as productCategory, 
      createdAt 
    FROM product 
    INNER JOIN category ON product.productCategory = category.categoryId
  `);
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.get("/products/:productId", async (request, response) => {
  const { productId } = request.params;
  try {
    const { rows } = await client.query(
      `
    SELECT 
      productId, 
      productName, 
      productPrice, 
      productImg, 
      productMaterial, 
      category.categoryName as productCategory, 
      createdAt 
      FROM product 
      INNER JOIN category ON product.productCategory = category.categoryId
      WHERE (productId = $1)
    `,
      [productId]
    );
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.get("/products/category/:categoryName", async (request, response) => {
  const { categoryName } = request.params;
  try {
    const { rows } = await client.query(
      `
    SELECT 
      productId, 
      productName, 
      productPrice, 
      productImg, 
      productMaterial, 
      category.categoryName as productCategory, 
      createdAt 
    FROM product 
    INNER JOIN category ON product.productCategory = category.categoryId
    WHERE category.categoryName = $1
    `,
      [categoryName]
    );
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.get("/productcategories", async (_request, response) => {
  try {
    const { rows } = await client.query(`
      SELECT categoryId, categoryName
      FROM category
    `);
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

export default router;
