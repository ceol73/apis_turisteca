const { ReaccionesPost } = require('../models');

const ReaccionesPostRepository = {
  async create(data) {
    return await ReaccionesPost.create(data);
  },

  async findById(id) {
    return await ReaccionesPost.findByPk(id);
  },

  async findAll() {
    return await ReaccionesPost.findAll();
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
