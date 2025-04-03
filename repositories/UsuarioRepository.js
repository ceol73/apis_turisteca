const { Usuario } = require('../models');

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

  async saveRefreshToken(id, refreshToken) {
    return await Usuario.update({ refresh_token: refreshToken }, { where: { id } });
  },

  async revokeRefreshToken(refreshToken) {
    return await Usuario.update({ refresh_token: null }, { where: { refresh_token: refreshToken } });
  },
};

module.exports = UsuarioRepository;
