import Router from "express";

import PostController from "../controllers/Post.js";

const router = new Router();

router.get("/", PostController.getAll);
router.get("/:id", PostController.getOne);
router.post("/", PostController.create);
router.put("/", PostController.update);

export default router;
