const User = require("../models/user");

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Profile Server Error" });
  }
};

const logoutUser = async (req, res) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    const user = await User.findOneAndUpdate({ _id: req.user.id, token:token }, { $set: { token: null } }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else   {
      return res.status(200).json({ message: "User logged out", success: true });
    }
  } catch (error) {
    res.status(500).json({ message: "Logout Server Error" });
  }
};

module.exports = { getUserProfile , logoutUser };
