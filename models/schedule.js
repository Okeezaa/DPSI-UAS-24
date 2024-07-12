const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
