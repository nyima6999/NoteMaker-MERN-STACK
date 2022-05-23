require("dotenv").config();
const { urlencoded } = require("express");
const morgan = require("morgan");
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect(process.env.MONGO_URI);
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () =>
  console.log("mongo connected: ", process.env.MONGO_URI)
);
db.on("disconnected", () => console.log("mongo disconnected"));

app.use(morgan("short"));
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
