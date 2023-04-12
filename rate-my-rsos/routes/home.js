module.exports = function (router, connection) {
  const homeRoute = router.route("/");

  homeRoute.get(function (req, res) {
    console.log("Get request", Date.now());
    connection.query("SELECT * FROM RSOs", (error, results) => {
      if (error) {
        console.error("Error running query:", error);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  });

  const searchRoute = router.route("/search/:value");

  searchRoute.get(function (req, res) {
    console.log("Get request", Date.now());
    const value = req.params.value
    console.log(value)
    connection.query("SELECT * FROM RSOs WHERE RSOName LIKE '%" + value + "%'", (error, results) => {
      if (error) {
        console.error("Error running query:", error);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  });

  return router;
};
