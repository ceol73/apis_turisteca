const ViajeRepository = require('../repositories/viajeRepository');
const { body, validationResult } = require('express-validator');
const APIresponse = require('../middlewares/APIresponse');

const ViajeController = {
  async create(req, res) {
    await body('idUsuario').isInt().notEmpty().run(req);
    await body('idLugar').isInt().notEmpty().run(req);
    await body('fecha').optional().isISO8601().run(req);
    await body('huella').optional().isFloat().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const viaje = await ViajeRepository.create(req.body);
      new APIresponse(true, 'Viaje created successfully', viaje, res, 201).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findById(req, res) {
    try {
      const viaje = await ViajeRepository.findById(req.params.id);
      if (!viaje) {
        return new APIresponse(false, 'Viaje not found', null, res, 404).send();
      }
      new APIresponse(true, 'Viaje found', viaje, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async findAll(req, res) {
    try {
      const viajes = await ViajeRepository.findAll();
      new APIresponse(true, 'Viajes retrieved successfully', viajes, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async update(req, res) {
    await body('idUsuario').optional().isInt().run(req);
    await body('idLugar').optional().isInt().run(req);
    await body('fecha').optional().isISO8601().run(req);
    await body('huella').optional().isFloat().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return new APIresponse(false, 'Validation errors', errors.array(), res, 400).send();
    }

    try {
      const [updated] = await ViajeRepository.update(req.params.id, req.body);
      if (!updated) {
        return new APIresponse(false, 'Viaje not found', null, res, 404).send();
      }
      new APIresponse(true, 'Viaje updated successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },

  async delete(req, res) {
    try {
      const deleted = await ViajeRepository.delete(req.params.id);
      if (!deleted) {
        return new APIresponse(false, 'Viaje not found', null, res, 404).send();
      }
      new APIresponse(true, 'Viaje deleted successfully', null, res).send();
    } catch (error) {
      new APIresponse(false, error.message, null, res, 500).send();
    }
  },
};

module.exports = ViajeController;
