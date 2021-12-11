import { config } from "dotenv";
import express from "express";

import router from "./routes/index.js";

config();

const app = express();
const port = process.env.PORT || 3030;

app.use("/", router);

app.listen(port, () => {
  console.log(`SERVER started on port ${port}`);
});
