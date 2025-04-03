const { ImagenLugar } = require('../models');

const ImagenLugarRepository = {
  async create(data) {
    return await ImagenLugar.create(data);
  },

  async findById(id) {
    return await ImagenLugar.findByPk(id, {
      include: [Lugar, ImagenURL],
    });
  },

  async findAll() {
    return await ImagenLugar.findAll({
      include: [Lugar, ImagenURL],
    });
  },

  async update(id, data) {
    return await ImagenLugar.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await ImagenLugar.destroy({
      where: { id },
    });
  },
};

module.exports = ImagenLugarRepository;
