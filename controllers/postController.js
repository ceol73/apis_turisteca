const PostRepository = require('../repositories/PostRepository');
console.log('Resolved path for PostRepository:', require.resolve('../repositories/PostRepository'));
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const PostController = {
  async create(req, res) {
    await body('contenido').optional().isString().run(req);
    await body('idImagen').optional().isInt().run(req);
    await body('idUsuario').isInt().notEmpty().run(req);
    await body('creado_en').isISO8601().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const post = await PostRepository.create(req.body);
      new APIresponse(true, 'Post created successfully', post, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const post = await PostRepository.findById(req.params.id);
      if (!post) {
        return new APIresponse(false, 'Post not found', null, res, 404).send();
      }
      new APIresponse(true, 'Post found', post, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const posts = await PostRepository.findAll();
      new APIresponse(true, 'Posts retrieved successfully', posts, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('contenido').optional().isString().run(req);
    await body('idImagen').optional().isInt().run(req);
    await body('idUsuario').isInt().notEmpty().run(req);
    await body('creado_en').isISO8601().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await PostRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'Post not found', null, res, 404).send();
      }
      new APIresponse(true, 'Post updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await PostRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'Post not found', null, res, 404).send();
      }
      new APIresponse(true, 'Post deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = PostController;
