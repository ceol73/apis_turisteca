const express = require('express');
const auth = require('../middlewares/auth');
const postRoutes = require('./postRoutes');
const followsRoutes = require('./followsRoutes');
const imagenLugarRoutes = require('./imagenLugarRoutes');
const imagenPostRoutes = require('./imagenPostRoutes');
const imagenURLRoutes = require('./imagenURLRoutes');
const lugarRoutes = require('./lugarRoutes');
const reaccionesComentariosRoutes = require('./reaccionesComentariosRoutes');
const reaccionesPostRoutes = require('./reaccionesPostRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const viajeRoutes = require('./viajeRoutes');
const comentariosRoutes = require('./comentariosRoutes');

const router = express.Router();

router.use('/posts', auth, postRoutes);
router.use('/follows', auth, followsRoutes);
router.use('/imagen-lugar', auth, imagenLugarRoutes);
router.use('/imagen-post', auth, imagenPostRoutes);
router.use('/imagen-url', auth, imagenURLRoutes);
router.use('/lugares', auth, lugarRoutes);
router.use('/reacciones-comentarios', auth, reaccionesComentariosRoutes);
router.use('/reacciones-post', auth, reaccionesPostRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/viajes', auth, viajeRoutes);
router.use('/comentarios', auth, comentariosRoutes);

module.exports = router;
