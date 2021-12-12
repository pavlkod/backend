import Post from "../models/Post.js";

class PostController {
  async create(req, res) {
    try {
      console.log(req.body);
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
