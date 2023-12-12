import express from "express";
import path from "path";
import cors from "cors";
import productsRouter from "./routes/products";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", productsRouter);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(path.resolve(), "public")));

app.listen(PORT, () => {
  console.log("Backend started at http://localhost:3000/  teeeest");
});