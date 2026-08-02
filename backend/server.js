const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database");
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobs");
const applicationRoutes = require("./routes/applications");
const eventRoutes = require("./routes/events");
const feedbackRoutes = require("./routes/feedback");
const adminRoutes = require("./routes/admin");
const eventRegistrationRoutes = require("./routes/eventRegistration");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/event-registration", eventRegistrationRoutes);

connectDB();

app.get("/", (req, res) => {
    res.send("🚀 Alumni Network Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});