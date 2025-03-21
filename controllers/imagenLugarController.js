const ImagenLugarRepository = require('../repositories/imagenLugarRepository');

const ImagenLugarController = {
  async create(req, res) {
    try {
      const imagenLugar = await ImagenLugarRepository.create(req.body);
      res.status(201).json(imagenLugar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const imagenLugar = await ImagenLugarRepository.findById(req.params.id);
      if (!imagenLugar) return res.status(404).json({ error: 'ImagenLugar not found' });
      res.json(imagenLugar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const imagenesLugar = await ImagenLugarRepository.findAll();
      res.json(imagenesLugar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await ImagenLugarRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'ImagenLugar not found' });
      res.json({ message: 'ImagenLugar updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ImagenLugarRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'ImagenLugar not found' });
      res.json({ message: 'ImagenLugar deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ImagenLugarController;
