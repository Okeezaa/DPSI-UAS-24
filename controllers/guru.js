const Guru = require('../models/guru');

exports.createGuru = async (req, res) => {
    try {
        const newGuru = new Guru(req.body);
        const savedGuru = await newGuru.save();
        res.status(201).json(savedGuru);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllGuru = async (req, res) => {
    try {
        const guru = await Guru.find();
        res.status(200).json(guru);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getGuruById = async (req, res) => {
    try {
        const guru = await Guru.findById(req.params.id);
        if (!guru) return res.status(404).json({ message: 'Guru not found' });
        res.status(200).json(guru);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateGuru = async (req, res) => {
    try {
        const updatedGuru = await Guru.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGuru) return res.status(404).json({ message: 'Guru not found' });
        res.status(200).json(updatedGuru);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteGuru = async (req, res) => {
    try {
        const deletedGuru = await Guru.findByIdAndDelete(req.params.id);
        if (!deletedGuru) return res.status(404).json({ message: 'Guru not found' });
        res.status(200).json({ message: 'Guru deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
