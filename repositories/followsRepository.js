const { Follows } = require('../models');

const FollowsRepository = {
  async create(data) {
    return await Follows.create(data);
  },

  async findById(id) {
    return await Follows.findByPk(id, {
      include: [
        { model: Usuario, as: 'Seguidor', foreignKey: 'idSeguidor' },
        { model: Usuario, as: 'Seguido', foreignKey: 'idSeguido' },
      ],
    });
  },

  async findAll() {
    return await Follows.findAll({
      include: [
        { model: Usuario, as: 'Seguidor', foreignKey: 'idSeguidor' },
        { model: Usuario, as: 'Seguido', foreignKey: 'idSeguido' },
      ],
    });
  },

  async update(id, data) {
    return await Follows.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await Follows.destroy({
      where: { id },
    });
  },
};

module.exports = FollowsRepository;
