const ComentariosRepository = require('../repositories/comentariosRepository');

const ComentariosController = {
  async create(req, res) {
    try {
      const comentario = await ComentariosRepository.create(req.body);
      res.status(201).json(comentario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const comentario = await ComentariosRepository.findById(req.params.id);
      if (!comentario) return res.status(404).json({ error: 'Comentario not found' });
      res.json(comentario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const comentarios = await ComentariosRepository.findAll();
      res.json(comentarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await ComentariosRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Comentario not found' });
      res.json({ message: 'Comentario updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ComentariosRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Comentario not found' });
      res.json({ message: 'Comentario deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ComentariosController;
