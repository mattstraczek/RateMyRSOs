module.exports = function (router, connection) {
  const rsoRoute = router.route("/rso/:rso_name");

  //   rsoRoute.get(function (req, res) {
  //     const rsoId = req.url.split("/").pop().split("=").pop();
  //     console.log(rsoId);

  //     connection.query(
  //       `SELECT * FROM RSOs WHERE RSOId = ${rsoId}`,
  //       (error, results) => {
  //         if (error) {
  //           console.error("Error running query:", error);
  //           res.sendStatus(500);
  //         } else {
  //           res.json(results);
  //         }
  //       }
  //     );
  //   });

  function handleDataRequest(req, res) {
    // GET request
    if (req.method === "GET") {
      const rsoId = req.url.split("/").pop().split("=").pop();
      //   console.log(rsoId);

      connection.query(
        `SELECT * FROM RSOs WHERE RSOId = ${rsoId}`,
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

    // DELETE request
    else if (req.method === "DELETE") {
      const rsoId = req.url.split("/").pop().split("=").pop();

      connection.query(
        `DELETE FROM RSOs WHERE RSOId = ${rsoId}`,
        (error, results) => {
          if (error) {
            console.error("Error running query:", error);
            res.sendStatus(500);
          } else {
            res.json(`RSO with id ${rsoId} deleted`);
          }
        }
      );
    }

    // PUT request
    else if (req.method === "PUT") {
      const rsoId = req.url.split("/").pop().split("=").pop();

      const query = `UPDATE RSOs\
                       SET ContactEmail = '${req.body.ContactEmail}', YearEstablished='${req.body.YearEstablished}',\
                           Website = '${req.body.Website}', Facebook = '${req.body.Facebook}',\
                           Instagram = '${req.body.Instagram}'\
                       WHERE RSOId = '${rsoId}'`;
      connection.query(query, (error, results) => {
        if (error) {
          console.error("Error running query:", error);
          res.sendStatus(500);
        } else {
          res.json(`RSO with id ${rsoId} updated`);
        }
      });
    }
  }

  rsoRoute
    .get(handleDataRequest)
    .delete(handleDataRequest)
    .put(handleDataRequest);

  return router;
};
