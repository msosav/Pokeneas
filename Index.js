const express = require("express");
const app = express();
const port = 80;
app.set("view engine", "ejs");

app.set("views", "./src/views");
app.use(express.static("./src/public"));

app.use("/", require("./src/routes/web"));
app.use("/show_pokecard", require("./src/routes/web"));
app.use("/show_pokejson", require("./src/routes/web"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
