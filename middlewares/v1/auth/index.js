const LocalStrategy = require("passport-local").Strategy;
const { default: axios } = require("axios");
const req = require("express/lib/request");
const responseSenders = require("../../../utils/v1/helpers");
const jsonPlaceholderInstance = require("../../../utils/v1/apisBase");

let users;

exports.initializingPassport = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        console.log("HELLOOO World");
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        users = data;
        if (!users) return done(null, false);

        const user = users.find((val) => {
          return val.email === username;
        });

        if (!user) return done(null, false);

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = users.find((val) => {
        return val.id === id;
      });

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};

exports.isAuthorized = (req, res, next) => {
  if (req.user) return next();

  return responseSenders.resJError(res)("error", "notloggedin");
};
