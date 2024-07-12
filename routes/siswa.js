const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswa');
const { protect, authorize } = require('../middleware/authMiddleware');


router.post('/register', siswaController.registerSiswa);
router.get('/', protect, authorize(["siswa"]), siswaController.getAllSiswa);
router.get('/:id', siswaController.getSiswaById);
router.put('/:id', siswaController.updateSiswa);
router.delete('/:id', siswaController.deleteSiswa);
router.post('/login', siswaController.login);

module.exports = router;
