const { ReaccionesComentarios, Comentarios } = require('../models');

const ReaccionesComentariosRepository = {
  async create(data) {
    return await ReaccionesComentarios.create(data);
  },

  async findById(id) {
    return await ReaccionesComentarios.findByPk(id, {
      include: [Comentarios],
    });
  },

  async findAll() {
    return await ReaccionesComentarios.findAll({
      include: [Comentarios],
    });
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
