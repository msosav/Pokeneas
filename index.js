const express = require("express");
const app = express();
const port = 80;
app.set("view engine", "ejs");

app.use("/", require("./src/routes/api"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
