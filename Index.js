const express = require("express");
const ApiRoutes = require("./src/routes/ApiRoutes");
const WebRoutes = require("./src/routes/WebRoutes");

class Index {
  static main() {
    const app = express();
    const port = 8080;
    app.set("view engine", "ejs");

    app.set("views", "./src/views");
    app.use(express.static("./src/public"));

    app.use("/", WebRoutes.init());
    app.use("/pokeneas", WebRoutes.pokeneas());
    app.use("/api", ApiRoutes.init());

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

Index.main();
