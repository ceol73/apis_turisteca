const ComentarioRepository = require('../repositories/comentarioRepository');

class ComentarioController{
    async createComentario(req, res){
        try{
            const comentario = await ComentarioRepository.create(req.body);
            res.status(201).json(comentario);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findComentarioById(req, res){
        try{
            const comentario = await ComentarioRepository.findById(req.params.idPost, req.params.idUser);
            if(comentario) res.json(comentario);
            else res.status(404).json({ message: 'Comentario not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async findAllComentarios(req, res){
        try{
            const comentarios = await ComentarioRepository.findAll(req.params.idPost);
            res.json(comentarios);
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async updateComentario(req, res){
        try{
            const comentario = await ComentarioRepository.update(req.params.idPost, req.params.idUser, req.body);
            if(comentario[0]) res.json({ message: 'Comentario updated' });
            else res.status(404).json({ message: 'Comentario not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    async deleteComentario(req, res){
        try{
            const comentario = await ComentarioRepository.delete(req.params.idPost, req.params.idUser);
            if(comentario) res.json({ message: 'Comentario deleted' });
            else res.status(404).json({ message: 'Comentario not found' });
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ComentarioController();