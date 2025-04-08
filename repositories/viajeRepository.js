const Viaje = require('../models/viaje');

const ViajeRepository = {
  async create(data) {
    return await Viaje.create(data);
  },

  async findById(id) {
    return await Viaje.findByPk(id);
  },

  async findAll() {
    return await Viaje.findAll();
  },

  async update(id, data) {
    return await Viaje.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await Viaje.destroy({
      where: { id },
    });
  },
};

module.exports = ViajeRepository;
