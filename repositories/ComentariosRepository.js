const { Comentarios, Usuario, Post } = require('../models');

const ComentariosRepository = {
  async create(data) {
    return await Comentarios.create(data);
  },

  async findById(id) {
    return await Comentarios.findByPk(id, {
      include: [Usuario, Post],
    });
  },

  async findAll() {
    return await Comentarios.findAll({
      include: [Usuario, Post],
    });
  },

  async update(id, data) {
    return await Comentarios.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await Comentarios.destroy({
      where: { id },
    });
  },
};

module.exports = ComentariosRepository;
