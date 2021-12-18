import { config } from "dotenv";

import express from "express";
import mongoose from "mongoose";
import fileupload from "express-fileupload";

import router from "./routes/index.js";

config();

const app = express();

app.use(express.json());
app.use(fileupload({}));
app.use("/", router);

(async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT, () => {
      console.log(`SERVER started on port ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
