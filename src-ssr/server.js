const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;
const routes = require("./routes");
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
    })
);

routes(app, db);

// Open the port to public
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
