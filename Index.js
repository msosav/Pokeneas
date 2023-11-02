const express = require("express");
const ApiRoutes = require("./src/routes/ApiRoutes");

class Index {
  static main() {
    const app = express();
    const port = 80;
    app.set("view engine", "ejs");

    app.use("/api", ApiRoutes.initialize());

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

Index.main();
