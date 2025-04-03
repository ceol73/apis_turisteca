const { ReaccionesComentarios } = require('../models');

const ReaccionesComentariosRepository = {
  async create(data) {
    return await ReaccionesComentarios.create(data);
  },

  async findById(id) {
    return await ReaccionesComentarios.findByPk(id);
  },

  async findAll() {
    return await ReaccionesComentarios.findAll();
  },

  async update(id, data) {
    return await ReaccionesComentarios.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await ReaccionesComentarios.destroy({
      where: { id },
    });
  },
};

module.exports = ReaccionesComentariosRepository;
