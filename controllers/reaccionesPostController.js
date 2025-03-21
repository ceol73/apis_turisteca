const ReaccionesPostRepository = require('../repositories/reaccionesPostRepository');

const ReaccionesPostController = {
  async create(req, res) {
    try {
      const reaccionPost = await ReaccionesPostRepository.create(req.body);
      res.status(201).json(reaccionPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const reaccionPost = await ReaccionesPostRepository.findById(req.params.id);
      if (!reaccionPost) return res.status(404).json({ error: 'ReaccionPost not found' });
      res.json(reaccionPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const reaccionesPost = await ReaccionesPostRepository.findAll();
      res.json(reaccionesPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await ReaccionesPostRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'ReaccionPost not found' });
      res.json({ message: 'ReaccionPost updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ReaccionesPostRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'ReaccionPost not found' });
      res.json({ message: 'ReaccionPost deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ReaccionesPostController;
