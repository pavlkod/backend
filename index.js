import { config } from "dotenv";
import express from "express";

config();
const app = express();
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`SERVER started on port ${port}`);
});
