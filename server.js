// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Database Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // Routes
// app.use("/api/auth", require("./routes/auth"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(5000, "0.0.0.0", () => {
  console.log("🚀 Server running on port 5000");
});
