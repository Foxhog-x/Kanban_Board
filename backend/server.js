const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/signup", require("./routes/signupRoute"));
app.use("/login", require("./routes/loginRoute"));
app.use("/api/boards", require("./routes/api/board"));
app.use("/api/list_column", require("./routes/api/list_column"));
app.use("/api/cards", require("./routes/api/card"));
app.listen(8000, () => console.log("port is running at 8000"));
