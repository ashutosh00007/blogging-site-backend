const axios = require("axios");

// JsonPlaceholder API Instance
exports.jsonPlaceholderInstance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  timeout: 600000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
