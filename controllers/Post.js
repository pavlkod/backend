import Post from "../models/Post.js";

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Id not retrive" });
      }
      const post = await Post.findById(id);
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
