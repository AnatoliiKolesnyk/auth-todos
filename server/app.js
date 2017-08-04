const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const router = require('./router');

const config = require("./config");

// DB setup
mongoose.connect(config.getDbConnectionString("dev"), {
  useMongoClient: true,
});

// App setup

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
app.use("/static", express.static(path.join(__dirname, "..", "client", "todo-app", "build", "static")));
app.use("/", express.static(path.join(__dirname, "..", "client", "todo-app", "build")));

router(app);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
