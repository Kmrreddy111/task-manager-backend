const express = require("express");
const router = express.Router();
const { getCategories } = require("../controllers/category-controller"); // Import the controller

// Route to get all categories
router.get("/", getCategories);

module.exports = router;