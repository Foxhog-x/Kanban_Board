const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  return res.send("hello its working");
});

app.listen(8000, () => console.log("port is running at 8000"));
