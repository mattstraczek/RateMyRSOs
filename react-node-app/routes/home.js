module.exports = function (router, connection) {
  const homeRoute = router.route("/");

  // homeRoute.get(function (req, res) {
  //     res.json({ message: 'Home route!' });

  // });

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

  return router;
};
