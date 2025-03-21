const UsuarioRepository = require('../repositories/usuarioRepository');

const UsuarioController = {
  async create(req, res) {
    try {
      const usuario = await UsuarioRepository.create(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const usuario = await UsuarioRepository.findById(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'Usuario not found' });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const usuarios = await UsuarioRepository.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await UsuarioRepository.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Usuario not found' });
      res.json({ message: 'Usuario updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await UsuarioRepository.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Usuario not found' });
      res.json({ message: 'Usuario deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UsuarioController;
