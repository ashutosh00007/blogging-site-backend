const responseSenders = require("../../../utils/v1/helpers");
const jsonPlaceholderInstance = require("../../../utils/v1/apisBase");

exports.getPosts = async (id = null, userId = null) => {
  let response;

  // for getting a particular post based on ID
  if (id) {
    response = await jsonPlaceholderInstance.get(`/posts/${id}`);

    return response;
  }

  // for getting all user posts
  if (userId) {
    response = await jsonPlaceholderInstance.get(`/posts?userId=${userId}`);

    return response;
  }

  // for getting all posts
  response = await jsonPlaceholderInstance.get("/posts");
  return response;
};

exports.addPost = async (payload) => {
  const response = await jsonPlaceholderInstance.post("/posts", payload);

  return response;
};

exports.updatePost = async (payload) => {
  const response = await jsonPlaceholderInstance.put(
    `/posts/${payload.id}`,
    payload
  );

  return response;
};

exports.deletePost = async (payload) => {
  const response = await jsonPlaceholderInstance.delete(
    `/posts/${payload.id}`,
    payload
  );

  return response;
};
