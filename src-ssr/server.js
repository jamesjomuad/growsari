const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;
const auth = require("./middlewares/auth");
const controller = require("./controllers");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
    })
);

//-----------
//   Home
//-----------
app.get("/", controller.index);

//-----------
//  User authentication/login
//-----------
app.post("/auth", controller.User.signin);

//-----------
//   User Signup
//-----------
app.post("/user", controller.User.signup);

//-----------
//   User Get
//-----------
app.get("/users", controller.User.get);

//-----------
//   Create Product
//-----------
app.post("/product", auth.verified, controller.Product.post);

//-----------
//   Get Product
//-----------
app.get("/product", auth.verified, controller.Product.get);

// Open the port to public
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
