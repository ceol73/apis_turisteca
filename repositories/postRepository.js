const { Post, Usuario, Comentarios, ReaccionesPost, ImagenPost } = require('../models');

const PostRepository = {
  async create(data) {
    return await Post.create(data);
  },

  async findById(id) {
    return await Post.findByPk(id, {
      include: [Usuario, Comentarios, ReaccionesPost, ImagenPost],
    });
  },

  async findAll() {
    return await Post.findAll({
      include: [Usuario, Comentarios, ReaccionesPost, ImagenPost],
    });
  },

  async update(id, data) {
    return await Post.update(data, {
      where: { id },
    });
  },

  async delete(id) {
    return await Post.destroy({
      where: { id },
    });
  },
};

module.exports = PostRepository;
