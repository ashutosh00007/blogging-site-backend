const responseSenders = require("../../../utils/v1/helpers");

const authControllers = {
  login: (req, res) => {
    return responseSenders.resJSuccess(res)(req.user, "Logged in");
  },

  logout: (req, res) => {
    req.logout(() => {
      return responseSenders.resJSuccess(res)(req.user, "Logged in");
    });
  },
};

module.exports = authControllers;
