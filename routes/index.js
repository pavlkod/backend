import express from "express";

import MainRouter from "./main.js";
import PostRouter from "./posts.js";

const router = new express();

router.use("/", MainRouter);
router.use("/posts", PostRouter);

export default router;
