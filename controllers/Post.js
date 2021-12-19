import PostService from "../service/Post.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req?.files?.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const deletedPost = await PostService.delete(req.params.id);
      res.json(deletedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new PostController();
