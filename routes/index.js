import express from "express";
const router = new express();

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

export default router;
