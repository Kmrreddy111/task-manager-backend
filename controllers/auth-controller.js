const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { generateToken } = require("../config/jwt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const token = generateToken(user._id);
    // Create a new user
    user = new User({
      name,
      email,
      token,
      password: hashedPassword,
    });
    await user.save();

 
    

    // Respond with the token
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Register Server Error" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = generateToken(user._id);
    await User.findOneAndUpdate({ _id: user._id },  { $set:{token:token} }, { new: true });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login Server Error" });
  }
};





module.exports = { register, login };


