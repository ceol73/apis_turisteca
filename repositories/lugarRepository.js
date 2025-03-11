const Lugar = require("../models/lugar");

class LugarRepository{
    async create(lugarData){
        return await Lugar.create(lugarData);
    }

    async findById(id){
        return await Lugar.findByPk(id);
    }

    async findAll(){
        return await Lugar.findAll();
    }

    async update(id, lugarData){
        return await Lugar.update(lugarData, {where: {id}});
    }

    async delete(id){
        return await Lugar.destroy({where: {id}});
    }
}

module.exports = new LugarRepository();