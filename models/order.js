const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Siswa' },
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Guru' },
    lessoncategory: String,
    date: Date,
    time: String,
    duration: Number,
    location: String
});

module.exports = mongoose.model('Order', orderSchema);
