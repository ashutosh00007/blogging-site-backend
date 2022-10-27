const responseSenders = {
  resJSuccess:
    (res, status = 200) =>
    (data, message = "Successful") =>
      res.status(status).json({ data, message }),
  resJError:
    (res, status = 500) =>
    (message = "error", error = "internal server error") =>
      res.status(status).json({
        error: {
          statusCode: status,
          error,
          message,
        },
      }),
  isProduction: () => (process.env.ENV === "production" ? true : false),
};

module.exports = responseSenders;
