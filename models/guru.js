const mongoose = require('mongoose');

const guruSchema = new mongoose.Schema({
    teacher_name: String,
    placeofbirth: String,
    dateofbirth: Date,
    gender: String,
    religion: String,
    address: String,
    phoneNumber: Number,
    education: String,
    expertice: String,
    idNumber: Number,
    idCard: Number,
    photo: String,
    certificates: String
});

module.exports = mongoose.model('Guru', guruSchema);
