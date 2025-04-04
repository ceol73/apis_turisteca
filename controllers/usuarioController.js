const UsuarioRepository = require('../repositories/UsuarioRepository');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');
const bcrypt = require('bcryptjs');

dotenv.config();

const UsuarioController = {
  async create(req, res) {
    await body('username').isString().notEmpty().run(req);
    await body('email').isEmail().notEmpty().run(req);
    await body('password').isString().notEmpty().run(req);
    await body('google_id').optional().isString().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const usuario = await UsuarioRepository.create({ ...req.body, password: hashedPassword });
      new APIresponse(true, 'Usuario created successfully', usuario, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const usuario = await UsuarioRepository.findById(req.params.id);
      if (!usuario) {
        return new APIresponse(false, 'Usuario not found', null, res, 404).send();
      }
      new APIresponse(true, 'Usuario found', usuario, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const usuarios = await UsuarioRepository.findAll();
      new APIresponse(true, 'Usuarios retrieved successfully', usuarios, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('username').optional().isString().run(req);
    await body('email').optional().isEmail().run(req);
    await body('password').optional().isString().run(req);
    await body('google_id').optional().isString().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await UsuarioRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'Usuario not found', null, res, 404).send();
      }
      new APIresponse(true, 'Usuario updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await UsuarioRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'Usuario not found', null, res, 404).send();
      }
      new APIresponse(true, 'Usuario deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const usuario = await UsuarioRepository.findByUsername(username);

      if (!usuario) {
        console.log('Usuario no encontrado');
        return new APIresponse(false, 'Credenciales inválidas', null, res, 401).send();
      }

      const passwordMatch = await bcrypt.compare(password, usuario.password);

      if (!passwordMatch) {
        return new APIresponse(false, 'Credenciales inválidas', null, res, 401).send();
      }

      const accessToken = jwt.sign(
        { id: usuario.id, username: usuario.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      const refreshToken = jwt.sign(
        { id: usuario.id, username: usuario.username },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
      );

      await UsuarioRepository.saveRefreshToken(usuario.id, refreshToken);

      new APIresponse(true, 'Login successful', { accessToken, refreshToken }, res).send();
    } catch (error) {
      console.error('Error en login:', error); // Log del error
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  logout: async (req, res) => {
    const { refreshToken } = req.body;

    try {
      if (!refreshToken) {
        return new APIresponse(false, 'Refresh token is required', null, res, 400).send();
      }
      await UsuarioRepository.revokeRefreshToken(refreshToken);

      new APIresponse(true, 'Logout successful', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = UsuarioController;
