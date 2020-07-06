const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect database
connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  console.log("Hi");
  res.json({ msg: "welcome to contact keeper API" });
});

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
