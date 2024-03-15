const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const db_con = require("./db");

app.use(cors());
app.use(bodyParser.json());
app.use("/signup", require("./routes/signupRoute"));
app.use("/login", require("./routes/loginRoute"));
app.use("/api/boards", require("./routes/api/board"));
app.use("/api/list_column", require("./routes/api/list_column"));
app.use("/api/cards", require("./routes/api/card"));
app.use("/api/username", require("./routes/api/username"));

app.listen(8000, () => console.log("port is running at 8000"));
