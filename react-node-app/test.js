// async function selectQuery(con, command) {
//   let res;
//   con.query(command, function (error, results) {
//     if (error) throw error;
//     Object.keys(results).forEach(function (key) {
//       var row = results[key];
//       //   res = row[0];

//       //   if (key == 0) {
//       //     Object.keys(row).forEach(function (header) {
//       //       process.stdout.write(header + "\t");
//       //     });
//       //     console.log();
//       //   }

//       //   Object.values(row).forEach(function (elem) {
//       //     process.stdout.write(elem + "\t");
//       //   });
//       //   console.log();
//       //   console.log(key, row["RSOName"]);
//       res = row["RSOName"];
//     });
//   });
//   return res;
// }

// var mysql = require("mysql");
// const con = mysql.createConnection({
//   host: "34.173.47.141",
//   user: "root",
//   password: "test12345",
//   database: "RateMyRSOs",
// });
// con.connect();

// const selectCommand = "SELECT * FROM RSOs WHERE RSOName LIKE 'UIUC%';";
// let res = await selectQuery(con, selectCommand);
// console.log(res);

// con.end();

console.log(Date.now());
