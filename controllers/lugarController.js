const LugarRepository = require('../repositories/lugarRepository');

const LugarController = {
  async create(req, res) {
    try {
      const lugar = await LugarRepository.create(req.body);
      res.status(201).json(lugar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const lugar = await LugarRepository.findById(req.params.id);
      if (!lugar) return res.status(404).json({ error: 'Lugar not found' });
      res.json(lugar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const lugares = await LugarRepository.findAll();
      res.json(lugares);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await LugarRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Lugar not found' });
      res.json({ message: 'Lugar updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await LugarRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Lugar not found' });
      res.json({ message: 'Lugar deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = LugarController;
