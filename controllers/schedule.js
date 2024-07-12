const Schedule = require('../models/schedule');

exports.createSchedule = async (req, res) => {
    try {
        const newSchedule = new Schedule(req.body);
        const savedSchedule = await newSchedule.save();
        res.status(201).json(savedSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate('order_id');
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id).populate('order_id');
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSchedule = async (req, res) => {
    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSchedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteSchedule = async (req, res) => {
    try {
        const deletedSchedule = await Schedule.findByIdAndDelete(req.params.id);
        if (!deletedSchedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json({ message: 'Schedule deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
