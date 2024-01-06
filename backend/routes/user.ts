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

router.post("/user", async (request, response) => {
  try {
    let useremail = request.body.useremail;
    let userpassword = request.body.userpassword;
    let userfirstname = request.body.userfirstname;
    let userlastname = request.body.userlastname;
    let userphone = request.body.userphone;
    let userbirthdate = request.body.userbirthdate;
    let userstreet = request.body.userstreet;
    let usercity = request.body.usercity;
    let userstate = request.body.userstate;
    let userzipcode = request.body.userzipcode;

    await client.query(
      `INSERT INTO userInfo (userEmail, userPassword, userFirstname, userLastname, userPhone, userBirthdate, userStreet, userCity, userState, userZipCode) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [
        useremail,
        userpassword,
        userfirstname,
        userlastname,
        userphone,
        userbirthdate,
        userstreet,
        usercity,
        userstate,
        userzipcode,
      ]
    );
    const { rows } = await client.query("SELECT * FROM userInfo");
    response.status(201).send(rows);
  } catch (error) {
    console.error(error);
    response.status(500).send("FAIL");
  }
});

export default router;
