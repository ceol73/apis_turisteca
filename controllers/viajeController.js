const ViajeRepository = require('../repositories/viajeRepository');

class ViajeController{
    async createViaje(req, res){
        try{
            const viaje = await ViajeRepository.create(req.body);
            res.status(201).json(viaje);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findViajeById(req, res){
        try{
            const viaje = await ViajeRepository.findById(req.params.id);
            if(viaje) res.json(viaje);
            else res.status(404).json({ message: 'Viaje not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findAllViajes(req, res){
        try{
            const viajes = await ViajeRepository.findAll();
            res.json(viajes);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async updateViaje(req, res){
        try{
            const viaje = await ViajeRepository.update(req.params.id, req.body);
            if(viaje[0]) res.json({ message: 'Viaje updated' });
            else res.status(404).json({ message: 'Viaje not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async deleteViaje(req, res){
        try{
            const viaje = await ViajeRepository.delete(req.params.id);
            if(viaje) res.json({ message: 'Viaje deleted' });
            else res.status(404).json({ message: 'Viaje not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ViajeController();