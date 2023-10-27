const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use("/", require("./src/routes/api"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
