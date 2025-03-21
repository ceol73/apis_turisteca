const { ImagenURL, ImagenLugar, ImagenPost } = require('../models');

const ImagenURLRepository = {
  async create(data) {
    return await ImagenURL.create(data);
  },

  async findById(id) {
    return await ImagenURL.findByPk(id, {
      include: [ImagenLugar, ImagenPost],
    });
  },

  async findAll() {
    return await ImagenURL.findAll({
      include: [ImagenLugar, ImagenPost],
    });
  },

  async update(id, data) {
    return await ImagenURL.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await ImagenURL.destroy({
      where: { id },
    });
  },
};

module.exports = ImagenURLRepository;
