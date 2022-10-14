const express = require("express");
const expressSesssion = require("express-session");
const cors = require("cors");
const passport = require("passport");

const { initializingPassport, isAuthorized } = require("./middlewares/v1/auth");
const routerV1 = require("./routes/v1");

const app = express();
const port = 8000;

initializingPassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  expressSesssion({ secret: "secret", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// api version 1 routes
app.use("/api/v1", routerV1);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
