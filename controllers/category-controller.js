const Category = require("../models/category"); // Import the Category model

// Controller to get all categories
const getCategories = async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.find();

    // Return the categories in the response
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getCategories,
};