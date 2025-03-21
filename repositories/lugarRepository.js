const { Lugar, Categoria, Viaje, ImagenLugar } = require('../models');

const LugarRepository = {
  async create(data) {
    return await Lugar.create(data);
  },

  async findById(id) {
    return await Lugar.findByPk(id, {
      include: [Categoria, Viaje, ImagenLugar],
    });
  },

  async findAll() {
    return await Lugar.findAll({
      include: [Categoria, Viaje, ImagenLugar],
    });
  },

  async update(id, data) {
    return await Lugar.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await Lugar.destroy({
      where: { id },
    });
  },
};

module.exports = LugarRepository;
