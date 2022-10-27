const responseSenders = require("../../../utils/v1/helpers");
const { users, posts, merchants, tenants, person } = require("../../../models");
// const { Merchants } = require("../../../models/merchants");
// const { Tenants } = require("../../../models/tenants");
const { exec } = require("child_process");

const authControllers = {
  login: (req, res) => {
    return responseSenders.resJSuccess(res)(req.user, "Logged in");
  },

  logout: (req, res) => {
    req.logout(() => {
      return responseSenders.resJSuccess(res)(req.user, "Logged in");
    });
  },

  addUser: async (req, res) => {
    try {
      const response = await users.create({
        name: "Ashutosh2",
        email: "ashutosh@gmail.com",
        password: "elonMusk",
      });

      if (!response) {
        return responseSenders.resJError(res)("user not added", "400");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "user added sucessfully"
      );
    } catch (error) {
      console.log(error);
      return responseSenders.resJError(res)();
    }
  },

  updateUser: async (req, res) => {
    try {
      const response = await users.update(
        { name: "Khajuria" },
        {
          where: {
            id: 4,
          },
        }
      );

      if (!response) {
        return responseSenders.resJError(res)("user not added", "400");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "user added sucessfully"
      );
    } catch (error) {
      return responseSenders.resJError(res)();
    }
  },

  deleteUser: async (req, res) => {
    try {
      const response = await users.destroy({
        where: {
          id: 5,
        },
      });

      if (!response) {
        return responseSenders.resJError(res)("user not added", "400");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "user deleted sucessfully"
      );
    } catch (error) {
      return responseSenders.resJError(res)();
    }
  },

  findUsers: async (req, res) => {
    try {
      // const response = await merchants.findAll({
      //   include: [tenants],
      // });

      const response = await tenants.findAll({
        include: [merchants],
      });
      if (!response) {
        return responseSenders.resJError(res)("users not found", "404");
      }

      return responseSenders.resJSuccess(res, 200)(
        response,
        "users found sucessfully"
      );
    } catch (error) {
      console.log(error);
      return responseSenders.resJError(res)();
    }
  },

  addMigration: async (req, res) => {
    try {
      const command = "npx sequelize-cli db:seed:all";

      exec(command, (error, stdout, stderr) => {
        console.log(error);
        if (error) responseSenders.resJError(res)();
        return responseSenders.resJSuccess(res, 200)(
          stdout,
          "users found sucessfully"
        );
      });
    } catch (error) {
      console.log(error);
      return responseSenders.resJError(res)();
    }
  },
};

module.exports = authControllers;
