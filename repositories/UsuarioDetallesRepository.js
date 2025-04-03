const { UsuarioDetalles, Usuario, ImagenURL } = require('../models');

const UsuarioDetallesRepository = {
    async create(data) {
        return await UsuarioDetalles.create(data);
    },

    async findById(id) {
        return await UsuarioDetalles.findByPk(id, {
            include: [Usuario, ImagenURL],
        });
    },

    async findAll() {
        return await UsuarioDetalles.findAll({
            include: [Usuario, ImagenURL],
        });
    },

    async update(id, data) {
        return await UsuarioDetalles.update(data, {
            where: { id },
        });
    },

    async delete(id) {
        return await UsuarioDetalles.destroy({
            where: { id },
        });
    },
};

module.exports = UsuarioDetallesRepository;
