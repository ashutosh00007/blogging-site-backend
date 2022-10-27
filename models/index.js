const { Sequelize, DataTypes, Model } = require("sequelize");

const { databaseSelection } = require("../configs/consts");
const { isProduction } = require("../utils/v1/helpers");

const selectConfig = isProduction()
  ? databaseSelection.production
  : databaseSelection.development;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  selectConfig.dbName,
  selectConfig.user,
  selectConfig.password,
  selectConfig.config
);

const assertDatabaseConnectionOk = async () => {
  try {
    console.log(`Checking database connection...`);
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
};

assertDatabaseConnectionOk();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users")(sequelize, DataTypes, Model);
db.posts = require("./posts")(sequelize, DataTypes, Model);
db.merchants = require("./merchants")(sequelize, DataTypes);
db.tenants = require("./tenants")(sequelize, DataTypes);
db.person = require("./person")(sequelize, DataTypes);

// db.users.associate(db);
// db.posts.associate(db);

db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);
// db.tenants.belongsTo(db.merchants, {
//   as: "merchant",
//   foreignKey: "merchantId",
// });
// db.merchants.hasMany(db.tenants, {
//   as: "tenants",
//   foreignKey: "merchantId",
// });
db.tenants.belongsTo(db.merchants);
db.merchants.hasMany(db.tenants);

db.sequelize
  .sync({ force: false })
  .then(() => console.log("Re-synced succssfully"));

module.exports = db;
