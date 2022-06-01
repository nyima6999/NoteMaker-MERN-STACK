const dotenv = require("dotenv");
dotenv.config();
const { urlencoded } = require("express");
const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

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

// deployment //

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", () => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API IS running..");
  });
}

// deployment //

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
