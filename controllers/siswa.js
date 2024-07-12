const Siswa = require('../models/siswa');
const jwt = require('jsonwebtoken');


exports.registerSiswa = async (req, res) => {
    try {
        const newSiswa = new Siswa(req.body);
        const savedSiswa = await newSiswa.save();
        res.status(201).json(savedSiswa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.find();
        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSiswaById = async (req, res) => {
    try {
        const siswa = await Siswa.findById(req.params.id);
        if (!siswa) return res.status(404).json({ message: 'Siswa not found' });
        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSiswa = async (req, res) => {
    try {
        const updatedSiswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSiswa) return res.status(404).json({ message: 'Siswa not found' });
        res.status(200).json(updatedSiswa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteSiswa = async (req, res) => {
    try {
        const deletedSiswa = await Siswa.findByIdAndDelete(req.params.id);
        if (!deletedSiswa) return res.status(404).json({ message: 'Siswa not found' });
        res.status(200).json({ message: 'Siswa deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { name, password } = req.body;

    try {
        const siswa = await Siswa.findOne({ name });
        if (!siswa) return res.status(404).json({ message: 'Siswa not found' });

        const isMatch = await siswa.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: siswa._id,role:"siswa" }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};