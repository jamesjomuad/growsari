import { boot } from "quasar/wrappers";

export default boot(async ({ app, router, store }) => {
  const express = require("express");
  console.log(express);
  const app = express();
  const port = 3000;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
