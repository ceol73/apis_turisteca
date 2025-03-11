const Comentario = require('../models/comentario');

class ComentarioRepository{
    async create(comentarioData){
        return await Comentario.create(comentarioData);
    }

    async findById(idPost, idUser){
        return await Comentario.findByPk({idPost, idUser});
    }

    async findAll(idPost){
        return await Comentario.findAll(idPost);
    }

    async update(idPost, idUser, comentarioData){
        return await Comentario.update(comentarioData, {where: {idPost, idUser}});
    }

    async delete(idPost, idUser){
        return await Comentario.destroy({where: {idPost, idUser}});
    }
}

module.exports = new ComentarioRepository();