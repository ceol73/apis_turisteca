const image = require('../models/image');

class ImgaeRepository {
    async create (imageData) {
        return await image.create(imageData);
    }

    async findById (id) {
        return await image.findByPk(id);
    }

    async findAll () {
        return await image.findAll();
    }

    async update (id, imageData) {
        return await image.update(imageData, { where: { id } });
    }

    async delete (id) {
        return await image.destroy({ where: { id } });
    }
}