const LugarRepository = require('../repositories/lugarRepository');

class LugarController{
    async createLugar(req, res){
        try{
            const lugar = await LugarRepository.create(req.body);
            res.status(201).json(lugar);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findLugarById(req, res){
        try{
            const lugar = await LugarRepository.findById(req.params.id);
            if(lugar) res.json(lugar);
            else res.status(404).json({ message: 'Lugar not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findAllLugares(req, res){
        try{
            const lugares = await LugarRepository.findAll();
            res.json(lugares);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async updateLugar(req, res){
        try{
            const lugar = await LugarRepository.update(req.params.id, req.body);
            if(lugar[0]) res.json({ message: 'Lugar updated' });
            else res.status(404).json({ message: 'Lugar not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async deleteLugar(req, res){
        try{
            const lugar = await LugarRepository.delete(req.params.id);
            if(lugar) res.json({ message: 'Lugar deleted' });
            else res.status(404).json({ message: 'Lugar not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}