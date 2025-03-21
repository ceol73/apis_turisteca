const ReaccionesComentariosRepository = require('../repositories/reaccionesComentariosRepository');

const ReaccionesComentariosController = {
  async create(req, res) {
    try {
      const reaccionComentario = await ReaccionesComentariosRepository.create(req.body);
      res.status(201).json(reaccionComentario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const reaccionComentario = await ReaccionesComentariosRepository.findById(req.params.id);
      if (!reaccionComentario) return res.status(404).json({ error: 'ReaccionComentario not found' });
      res.json(reaccionComentario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const reaccionesComentarios = await ReaccionesComentariosRepository.findAll();
      res.json(reaccionesComentarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await ReaccionesComentariosRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'ReaccionComentario not found' });
      res.json({ message: 'ReaccionComentario updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ReaccionesComentariosRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'ReaccionComentario not found' });
      res.json({ message: 'ReaccionComentario deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ReaccionesComentariosController;
