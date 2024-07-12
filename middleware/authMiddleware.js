const jwt = require('jsonwebtoken');
const Siswa = require('../models/siswa');

exports.protect = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'Tidak ada token, otorisasi ditolak' });
    }
    const token = authHeader.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Tidak ada token, otorisasi ditolak' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token tidak valid' });
    }
};
exports.authorize = (roles = []) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden! Anda tidak diizinkan untuk mengakses' });
        }
        next();
    };
};