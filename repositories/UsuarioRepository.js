const { Usuario, Post, Viaje, Follows, Comentarios } = require('../models');

const UsuarioRepository = {
  async create(data) {
    return await Usuario.create(data);
  },

  async findById(id) {
    return await Usuario.findByPk(id);
  },

  async findAll() {
    return await Usuario.findAll();
  },

  async update(id, data) {
    return await Usuario.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await Usuario.destroy({
      where: { id },
    });
  },

  async findByUsername(username) {
    return await Usuario.findOne({ where: { username } });
  },
};

module.exports = UsuarioRepository;
