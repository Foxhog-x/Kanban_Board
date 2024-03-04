const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const db_con = require("./db");

app.use(cors());
app.use(bodyParser.json());

app.use("/login", require("./routes/loginRoute"));
app.use("/api/boards", require("./routes/api/boards"));
app.use("/api/boards/list_type", require("./routes/api/list_type"));
app.use("/api/boards/list_type/cards", require("./routes/api/cards"));

app.listen(8000, () => console.log("port is running at 8000"));
