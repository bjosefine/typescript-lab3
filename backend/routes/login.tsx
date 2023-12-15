import express from "express";
const router = express.Router();
import client from "../connection";

router.get("/login", async (_request, response) => {
  try {
    const { rows } = await client.query(`
      SELECT * FROM userInfo
    `);
    response.json(rows);
  } catch (error) {
    console.error(error, "FAIL");
  }
});

router.post("/login", async (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  const sql = `SELECT * FROM userInfo WHERE LOWER(userEmail) = LOWER($1)`;

  try {
    await client.query(sql, [email], async (error, results) => {
      if (error) {
        throw error;
      }
      if (password === results.rows[0].userpassword)
        console.log("Correct password");
      response.json(results.rows[0]);
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
