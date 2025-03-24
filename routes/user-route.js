const express = require("express");
const { getUserProfile, logoutUser } = require("../controllers/user-controller");
const authMiddleware = require("../middleware/auth-middleware");

const router = express.Router();

router.get("/profile", authMiddleware, getUserProfile);
router.post("/logout", authMiddleware, logoutUser);

module.exports = router;
