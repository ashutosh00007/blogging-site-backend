// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = require("../../utils/v1/dataBase");

// real code
module.exports = (sequelize, DataTypes, Model) => {
  class Users extends Model {
    // static associate(models) {
    //   Users.hasMany(models.Posts, {
    //     forignKey: "userId",
    //     as: "posts",
    //   });
    // }
  }

  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    { sequelize, modelName: "Users" }
  );

  return Users;
};

// module.exports = (sequelize, DataTypes, Model) => {
//   const Users = sequelize.define("Users", {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//     },
//     email: {
//       type: DataTypes.STRING,
//     },
//     password: {
//       type: DataTypes.STRING,
//     },
//   });

//   Users.associate = (models) => {
//     Users.hasMany(models.Posts, {
//       onDelete: "cascade",
//     });
//   };

//   return Users;
// };
