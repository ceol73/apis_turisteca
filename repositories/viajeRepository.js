const Viaje = require('../models/Viaje');

class ViajeRepository{
    async create(viajeData){
        return await Viaje.create(viajeData);
    }

    async findById(id){
        return await Viaje.findByPk(id);
    }

    async findAll(){
        return await Viaje.findAll();
    }

    async update(id, viajeData){
        return await Viaje.update(viajeData, {where: {id}});
    }

    async delete(id){
        return await Viaje.destroy({where: {id}});
    }
}

module.exports = new ViajeRepository();