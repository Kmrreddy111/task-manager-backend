const Task = require("../models/Task");

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, category, status, priority, dueDate } = req.body;

    // Validate required fields
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    // Create the task
    const task = new Task({
      title,
      description,
      userId: req.user.id, // Associate task with the authenticated user
      status,
      priority,
      category,
      dueDate,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }); // Filter tasks by userId
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user.id }); // Ensure task belongs to the user

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a task by ID
// Update a task by ID
const updateTask = async (req, res) => {
  try {
    const { title, description, category, status, priority, dueDate } = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, // Ensure task belongs to the user
      { title, description, category, status, priority, dueDate },
      { new: true } // Return the updated document
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a task by ID
// Delete a task by ID
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id }); // Ensure task belongs to the user

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};