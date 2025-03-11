const FollowsRepository = require('../repositories/followsRepository');

class FollowsController{
    async createFollows(req, res){
        try{
            const follows = await FollowsRepository.create(req.body);
            res.status(201).json(follows);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findFollowsById(req, res){
        try{
            const follows = await FollowsRepository.findById(req.params.idSeguidor, req.params.idSeguido);
            if(follows) res.json(follows);
            else res.status(404).json({ message: 'Follows not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findAllFollows(req, res){
        try{
            const follows = await FollowsRepository.findAll(req.params.idSeguido);
            res.json(follows);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async updateFollows(req, res){
        try{
            const follows = await FollowsRepository.update(req.params.idSeguidor, req.params.idSeguido, req.body);
            if(follows[0]) res.json({ message: 'Follows updated' });
            else res.status(404).json({ message: 'Follows not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async deleteFollows(req, res){
        try{
            const follows = await FollowsRepository.delete(req.params.idSeguidor, req.params.idSeguido);
            if(follows) res.json({ message: 'Follows deleted' });
            else res.status(404).json({ message: 'Follows not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}