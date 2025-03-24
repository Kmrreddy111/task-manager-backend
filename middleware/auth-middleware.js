require("dotenv").config();
const { verifyToken } = require("../config/jwt");
const User = require("../models/user");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    console.log(token);
    const decoded = verifyToken(token);
    console.log(decoded);
    const user = await User.findOne({_id: decoded.id, token : token});
    
    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
