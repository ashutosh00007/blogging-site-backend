module.exports = (sequelize, DataTypes, Model) => {
  class Posts extends Model {
    // static associate(models) {
    //   Posts.belongsTo(models.Users, {
    //     foreignKey: "userId",
    //     as: "user",
    //   });
    // }
  }

  Posts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      //   userId: {
      //     type: DataTypes.INTEGER,
      //   },
      desc: {
        type: DataTypes.STRING,
      },
    },
    { sequelize, modelName: "Posts" }
  );

  return Posts;
};

// module.exports = (sequelize, DataTypes, Model) => {
//   const Posts = sequelize.define("Posts", {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     desc: {
//       type: DataTypes.STRING,
//     },
//   });

//   Posts.associate = (models) => {
//     Posts.belongsTo(models.Users, {
//       foreignKey: {
//         allowNull: false,
//       },
//     });
//   };

//   return Posts;
// };
