const { ImagenPost } = require('../models');

const ImagenPostRepository = {
  async create(data) {
    return await ImagenPost.create(data);
  },

  async findById(id) {
    return await ImagenPost.findByPk(id, {
      include: [Post, ImagenURL],
    });
  },

  async findAll() {
    return await ImagenPost.findAll({
      include: [Post, ImagenURL],
    });
  },

  async update(id, data) {
    return await ImagenPost.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await ImagenPost.destroy({
      where: { id },
    });
  },
};

module.exports = ImagenPostRepository;
