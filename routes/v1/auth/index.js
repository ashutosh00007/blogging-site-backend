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

authRouter.post("/add-user", authControllers.addUser);

authRouter.get("/find-all-users", authControllers.findUsers);

authRouter.put("/update-user", authControllers.updateUser);

authRouter.delete("/delete-user", authControllers.deleteUser);

authRouter.get("/add-migration", authControllers.addMigration);

module.exports = authRouter;
