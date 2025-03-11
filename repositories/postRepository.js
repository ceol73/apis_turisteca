const Post = require('../models/post');

class PostRepository{
    async create(postData){
        return await Post.create(postData);
    }

    async findById(id){
        return await Post.findByPk(id);
    }

    async findAll(){
        return await Post.findAll();
    }

    async update(id, postData){
        return await Post.update(postData, {where: {id}});
    }

    async delete(id){
        return await Post.destroy({where: {id}});
    }
}

module.exports = new PostRepository();