const {
  getPosts,
  addPost,
  updatePost,
} = require("../../../services/v1/jsonPlaceholder");

const { posts } = require("../../../models");

const responseSenders = require("../../../utils/v1/helpers");

const postsControllers = {
  getAllPosts: async (req, res) => {
    try {
      const response = getPosts();

      if (!response) {
        return responseSenders.resJError(res)("Posts not found", "404");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "posts found sucessfully"
      );
    } catch (error) {
      return responseSenders.resJError(res)();
    }
  },

  getSinglePost: async (req, res) => {
    try {
      const payload = req.body;

      const response = getPosts(payload.id);

      if (!response) {
        return responseSenders.resJError(res)("Post not found", "404");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "post found sucessfully"
      );
    } catch (error) {
      return responseSenders.resJError(res)();
    }
  },

  getUserPosts: async (req, res) => {
    try {
      const payload = req.body;

      const response = getPosts(null, payload.userId);

      if (!response) {
        return responseSenders.resJError(res)("Posts not found", "404");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "posts found sucessfully"
      );
    } catch (error) {
      return responseSenders.resJError(res)();
    }
  },

  addPost: async (req, res) => {
    try {
      const payload = req.body;

      const response = await addPost(payload);

      if (!response) {
        return responseSenders.resJError(res)("post not added", "400");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "posts added sucessfully"
      );
    } catch (error) {
      return responseSenders.resJError(res)();
    }
  },

  updatePost: async (req, res) => {
    try {
      const payload = req.body;

      const response = await updatePost(payload);

      if (!response) {
        return responseSenders.resJError(res)("post not updated", "400");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "posts updated sucessfully"
      );
    } catch (error) {
      return responseSenders.resJError(res)();
    }
  },

  deletePost: async (req, res) => {
    try {
      const payload = req.body;

      const response = await deletePost(payload);

      if (!response) {
        return responseSenders.resJError(res)("post not deleted", "400");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "posts deleted sucessfully"
      );
    } catch (error) {
      return responseSenders.resJError(res)();
    }
  },

  addPostSql: async (req, res) => {
    try {
      const response = await posts.create({ desc: "World", UserId: 1 });

      if (!response) {
        return responseSenders.resJError(res)("post not added", "400");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "posts added sucessfully"
      );
    } catch (error) {
      console.log(error);
      return responseSenders.resJError(res)();
    }
  },
};

module.exports = postsControllers;
