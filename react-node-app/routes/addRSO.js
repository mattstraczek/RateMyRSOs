module.exports = function (router, connection) {
  const addRoute = router.route("/add_rso");

  function handleDataRequest(req, res) {
    // GET request
    if (req.method === "GET") {
      // console.log("Get request", Date.now());
      connection.query(
        "SELECT * FROM RSOs ORDER BY RSOId DESC LIMIT 1;",
        (error, results) => {
          if (error) {
            console.error("Error running query:", error);
            res.sendStatus(500);
          } else {
            res.json(results);
          }
        }
      );
    }

    // POST request
    else if (req.method === "POST") {
      const inValues = Object.values(req.body)
        .map((value) => {
          if (typeof value === "string") {
            return value !== "" ? `'${value}'` : "NULL";
          } else {
            return value;
          }
        })
        .join(", ");
      console.log(inValues);

      connection.query(
        `INSERT INTO RSOs VALUES (${inValues});`,
        (error, results) => {
          if (error) {
            console.error("Error running query:", error);
            res.sendStatus(500);
          } else {
            res.json(results);
          }
        }
      );
    }
  }

  addRoute.get(handleDataRequest).post(handleDataRequest);

  return router;
};
