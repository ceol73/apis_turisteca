const Follows = require('../models/follows');

class FollowsRepository{
    async create(followsData){
        return await Follows.create(followsData);
    }

    async findById(idSeguidor, idSeguido){
        return await Follows.findByPk({idSeguidor, idSeguido});
    }

    async findAll(idSeguido){
        return await Follows.findAll(idSeguido);
    }

    async update(idSeguidor, idSeguido, followsData){
        return await Follows.update(followsData, {where: {idSeguidor, idSeguido}});
    }

    async delete(id){
        return await Follows.destroy({where: {idSeguidor, idSeguido}});
    }
}

module.exports = new FollowsRepository();