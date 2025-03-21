const ImagenURLRepository = require('../repositories/imagenURLRepository');

const ImagenURLController = {
  async create(req, res) {
    try {
      const imagenURL = await ImagenURLRepository.create(req.body);
      res.status(201).json(imagenURL);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const imagenURL = await ImagenURLRepository.findById(req.params.id);
      if (!imagenURL) return res.status(404).json({ error: 'ImagenURL not found' });
      res.json(imagenURL);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const imagenesURL = await ImagenURLRepository.findAll();
      res.json(imagenesURL);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await ImagenURLRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'ImagenURL not found' });
      res.json({ message: 'ImagenURL updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ImagenURLRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'ImagenURL not found' });
      res.json({ message: 'ImagenURL deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ImagenURLController;
