const Task = require("../models/Task");

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, userId: req.user.id });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(200).json(tasks);
};

exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted" });
};
