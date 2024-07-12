const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const siswaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true }
});

// Hash the password before saving the siswa
siswaSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare entered password with the hashed password
siswaSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Siswa', siswaSchema);
