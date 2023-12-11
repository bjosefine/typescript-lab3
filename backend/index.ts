import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.send("Hola backend!");
});

app.listen(3000, () => {
  console.log("Backend started at http://localhost:3000/");
});
