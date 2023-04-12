module.exports = function (router, connection) {
  const searchRoute = router.route("/search");

  searchRoute.get(function (req, res) {
    const url = req.url;
    infoList = url.split("?").pop().split("&");
    const info = Object.fromEntries(infoList.map((i) => i.split("=")));
    // console.log(info);

    queryRSOName = `SELECT RSOId, RSOName FROM RSOs WHERE RSOName LIKE '%${info.rso_name}%'`;
    queryRating = `SELECT RSOId, AVG(Rating) AS AvgRating FROM Reviews GROUP BY RSOId HAVING AvgRating BETWEEN ${info.min_rating} AND ${info.max_rating}`;
    queryDepartment = `SELECT RSOId, DeptName FROM Affiliations WHERE DeptName LIKE '%${info.department}%'`;
    queryOfficer = `SELECT RSOId, FirstName, LastName FROM Officers NATURAL JOIN Managements WHERE FirstName LIKE '%${info.officer_first_name}%' AND LastName LIKE '%${info.officer_last_name}%'`;
    querySize = `SELECT RSOId, COUNT(*) AS Size FROM Memberships GROUP BY RSOId HAVING Size BETWEEN ${info.min_size} AND ${info.max_size}`;

    sqlQuery = `SELECT RSOName, AvgRating, DeptName, FirstName, LastName, Size\
             FROM (${queryRSOName}) p1 NATURAL JOIN (${queryRating}) p2 NATURAL JOIN (${queryDepartment}) p3 NATURAL JOIN (${queryOfficer}) p4 NATURAL JOIN (${querySize}) p5
             ORDER BY RSOId`;

    connection.query(sqlQuery, (error, results) => {
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
