const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false })); // allows us to get the data in req.body

// Send a simple string to the browser
app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));