const ViajeRepository = require('../repositories/viajeRepository');

const ViajeController = {
  async create(req, res) {
    try {
      const viaje = await ViajeRepository.create(req.body);
      res.status(201).json(viaje);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const viaje = await ViajeRepository.findById(req.params.id);
      if (!viaje) return res.status(404).json({ error: 'Viaje not found' });
      res.json(viaje);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const viajes = await ViajeRepository.findAll();
      res.json(viajes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await ViajeRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Viaje not found' });
      res.json({ message: 'Viaje updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ViajeRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Viaje not found' });
      res.json({ message: 'Viaje deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ViajeController;
