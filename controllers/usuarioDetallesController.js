const UsuarioDetallesRepository = require('../repositories/UsuarioDetallesRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const UsuarioDetallesController = {
    async create(req, res) {
        await body('id').isInt().notEmpty().run(req);
        await body('nombre').optional().isString().run(req);
        await body('img_perfil').optional().isInt().run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
        }

        try {
            const usuarioDetalles = await UsuarioDetallesRepository.create(req.body);
            new APIresponse(true, 'UsuarioDetalles created successfully', usuarioDetalles, res, 201).send();
        } catch (error) {
            new APIresponse(false, error.message, null, res, 500).send();
        }
    },

    async findById(req, res) {
        try {
            const usuarioDetalles = await UsuarioDetallesRepository.findById(req.params.id);
            if (!usuarioDetalles) {
                return new APIresponse(false, 'UsuarioDetalles not found', null, res, 404).send();
            }
            new APIresponse(true, 'UsuarioDetalles found', usuarioDetalles, res).send();
        } catch (error) {
            new APIresponse(false, error.message, null, res, 500).send();
        }
    },

    async findAll(req, res) {
        try {
            const usuariosDetalles = await UsuarioDetallesRepository.findAll();
            new APIresponse(true, 'UsuariosDetalles retrieved successfully', usuariosDetalles, res).send();
        } catch (error) {
            new APIresponse(false, error.message, null, res, 500).send();
        }
    },

    async update(req, res) {
        await body('nombre').optional().isString().run(req);
        await body('img_perfil').optional().isInt().run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
        }

        try {
            const [updated] = await UsuarioDetallesRepository.update(req.params.id, req.body);
            if (!updated) {
                return new APIresponse(false, 'UsuarioDetalles not found', null, res, 404).send();
            }
            new APIresponse(true, 'UsuarioDetalles updated successfully', null, res).send();
        } catch (error) {
            new APIresponse(false, error.message, null, res, 500).send();
        }
    },

    async delete(req, res) {
        try {
            const deleted = await UsuarioDetallesRepository.delete(req.params.id);
            if (!deleted) {
                return new APIresponse(false, 'UsuarioDetalles not found', null, res, 404).send();
            }
            new APIresponse(true, 'UsuarioDetalles deleted successfully', null, res).send();
        } catch (error) {
            new APIresponse(false, error.message, null, res, 500).send();
        }
    },
};

module.exports = UsuarioDetallesController;
