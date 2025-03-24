const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoute = require("./routes/auth-route");
const userRoute = require("./routes/user-route");
const taskRoute = require("./routes/task-route");
const categoryRoute = require("./routes/category-route");



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: ['http://localhost:3000', "https://tiny-biscochitos-50f1ff.netlify.app"], // Allow frontend domains
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed request methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Middleware

app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/categories", categoryRoute);


// Start Server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});