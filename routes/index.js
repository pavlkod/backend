import express from "express";

import Post from "../models/Post.js";

const router = new express();

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});
router.post("/", async (req, res) => {
  const { author, title, content, picture } = req.body;
  const post = await Post.create({ author, title, content, picture });
  res.json(post);
});

export default router;
