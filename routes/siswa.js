const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswa');
const { protect, authorize } = require('../middleware/authMiddleware');

// Rute untuk mendaftarkan siswa baru, tidak memerlukan proteksi khusus
router.post('/register', siswaController.registerSiswa);

// Rute untuk mendapatkan semua data siswa, dilindungi dengan middleware 'protect' dan 'authorize'
// Hanya pengguna dengan peran "siswa" yang diizinkan mengakses rute ini
router.get('/', protect, authorize(["siswa"]), siswaController.getAllSiswa);

// Rute untuk mendapatkan data siswa berdasarkan ID, tidak dilindungi (semua orang bisa mengakses)
router.get('/:id', siswaController.getSiswaById);

// Rute untuk memperbarui data siswa berdasarkan ID, tidak dilindungi
router.put('/:id', siswaController.updateSiswa);

// Rute untuk menghapus data siswa berdasarkan ID, tidak dilindungi
router.delete('/:id', siswaController.deleteSiswa);

// Rute untuk login siswa, tidak memerlukan proteksi khusus
router.post('/login', siswaController.login);

module.exports = router;
