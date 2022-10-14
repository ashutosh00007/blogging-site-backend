const express = require("express");
const authRouter = require("./auth");
const postsRouter = require("./posts");

const routerV1 = express.Router();

// Auth
routerV1.use("/auth", authRouter);
routerV1.use("/posts", postsRouter);

module.exports = routerV1;
