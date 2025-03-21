const { ReaccionesPost, Post } = require('../models');

const ReaccionesPostRepository = {
  async create(data) {
    return await ReaccionesPost.create(data);
  },

  async findById(id) {
    return await ReaccionesPost.findByPk(id, {
      include: [Post],
    });
  },

  async findAll() {
    return await ReaccionesPost.findAll({
      include: [Post],
    });
  },

  async update(id, data) {
    return await ReaccionesPost.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await ReaccionesPost.destroy({
      where: { id },
    });
  },
};

module.exports = ReaccionesPostRepository;
