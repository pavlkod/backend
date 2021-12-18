import Post from "../models/Post.js";

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }
  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("Id not retrive");
    }
    const post = await Post.findById(id);
    return post;
  }
}
export default new PostService();
