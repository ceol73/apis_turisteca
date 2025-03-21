const ImagenPostRepository = require('../repositories/imagenPostRepository');

const ImagenPostController = {
  async create(req, res) {
    try {
      const imagenPost = await ImagenPostRepository.create(req.body);
      res.status(201).json(imagenPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const imagenPost = await ImagenPostRepository.findById(req.params.id);
      if (!imagenPost) return res.status(404).json({ error: 'ImagenPost not found' });
      res.json(imagenPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const imagenesPost = await ImagenPostRepository.findAll();
      res.json(imagenesPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await ImagenPostRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'ImagenPost not found' });
      res.json({ message: 'ImagenPost updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ImagenPostRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'ImagenPost not found' });
      res.json({ message: 'ImagenPost deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ImagenPostController;
