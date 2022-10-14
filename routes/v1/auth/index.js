const express = require("express");
const passport = require("passport");
const authControllers = require("../../../controllers/v1/auth");

const authRouter = express.Router();

authRouter.post(
  "/login",
  passport.authenticate("local"),
  authControllers.login
);

authRouter.get("/logout", authControllers.logout);

module.exports = authRouter;
