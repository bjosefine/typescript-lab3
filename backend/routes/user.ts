import express from "express";
const router = express.Router();
import client from "../connection";

router.get("/user", async (_request, response) => {
  try {
    const { rows } = await client.query(`
    SELECT * FROM userInfo
  `);
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.get("/user/:userId", async (request, response) => {
  const { userId } = request.params;
  try {
    const { rows } = await client.query(
      `
      SELECT * FROM userInfo
      WHERE (userId = $1)
    `,
      [userId]
    );
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

export default router;
