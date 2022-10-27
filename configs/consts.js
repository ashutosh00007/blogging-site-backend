exports.databaseSelection = {
  development: {
    dbName: process.env.BLOGGING_SITE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DB_PASSWORD,
    config: {
      host: "localhost",
      dialect: "mysql",
    },
  },
  test: {
    dbName: process.env.BLOGGING_SITE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DB_PASSWORD,
    config: {
      host: "localhost",
      dialect: "mysql",
    },
  },
  production: {
    dbName: process.env.BLOGGING_SITE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DB_PASSWORD,
    config: {
      host: "localhost",
      dialect: "mysql",
    },
  },
};
