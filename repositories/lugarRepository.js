const { Lugar } = require('../models');

const LugarRepository = {
  async create(data) {
    return await Lugar.create(data);
  },

  async findById(id) {
    return await Lugar.findByPk(id);
  },

  async findAll() {
    return await Lugar.findAll();
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
