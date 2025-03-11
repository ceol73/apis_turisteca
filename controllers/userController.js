const UserRepository = require('../repositories/userRepository');

class UserController{
    async createUser(req, res){
        try{
            const user = await UserRepository.create(req.body);
            res.status(201).json(user);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findUserById(req, res){
        try{
            const user = await UserRepository.findById(req.params.id);
            if(user) res.json(user);
            else res.status(404).json({ message: 'User not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findAllUsers(req, res){
        try{
            const users = await UserRepository.findAll();
            res.json(users);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser(req, res){
        try{
            const user = await UserRepository.update(req.params.id, req.body);
            if(user[0]) res.json({ message: 'User updated' });
            else res.status(404).json({ message: 'User not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser(req, res){
        try{
            const user = await UserRepository.delete(req.params.id);
            if(user) res.json({ message: 'User deleted' });
            else res.status(404).json({ message: 'User not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();