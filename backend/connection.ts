import { Client } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client
  .connect()
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.error("database connection error", error);
  });

export default client;
