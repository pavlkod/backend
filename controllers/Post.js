import Post from "../models/Post.js";
import PostService from "../service/Post.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
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
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: "Id not retrive" });
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
      res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Id not retrive" });
      }
      const deletedPost = await Post.findByIdAndDelete(id);
      res.json(deletedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
