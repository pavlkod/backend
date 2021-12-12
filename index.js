import { config } from "dotenv";

import express from "express";
import mongoose from "mongoose";

import router from "./routes/index.js";

config();

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use("/", router);

const startApp = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(port, () => {
      console.log(`SERVER started on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};
startApp();
