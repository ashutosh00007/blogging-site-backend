const express = require("express");
const postsControllers = require("../../../controllers/v1/posts");
const { isAuthorized } = require("../../../middlewares/v1/auth");

const postsRouter = express.Router();

postsRouter.get("/get-all-posts", isAuthorized, postsControllers.getAllPosts);

postsRouter.get(
  "/get-Single-Post",
  isAuthorized,
  postsControllers.getSinglePost
);

postsRouter.get("/get-user-Post", isAuthorized, postsControllers.getUserPosts);

postsRouter.post("/add-post", isAuthorized, postsControllers.addPost);

postsRouter.put("/update-post", isAuthorized, postsControllers.updatePost);

postsRouter.delete("/delete-post", isAuthorized, postsControllers.deletePost);

module.exports = postsRouter;
