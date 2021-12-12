import express from "express";
const router = new express();

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("OK");
});

export default router;
