module.exports = function (app, router, connection) {
  app.use("/api", require("./home.js")(router, connection));
  app.use("/api", require("./rso_page.js")(router, connection));
  app.use("/api", require("./addRSO.js")(router, connection));
  app.use("/api", require("./search.js")(router, connection));
};
