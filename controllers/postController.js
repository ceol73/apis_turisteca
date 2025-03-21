const PostRepository = require('../repositories/postRepository');

const PostController = {
  async create(req, res) {
    try {
      const post = await PostRepository.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const post = await PostRepository.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const posts = await PostRepository.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await PostRepository.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await PostRepository.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = PostController;
