const mongoose = require("mongoose");
const category = require("./category");

const TaskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["pending", "in-progress", "completed"] },
    priority: { type: String, enum: ["low", "medium", "high"] },
    dueDate: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
