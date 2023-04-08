const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '34.173.47.141',
    user: 'root',
    password: 'test12345',
    database: 'RateMyRSOs'
});

connection.connect((error) => {
    if (error) {
      console.error('Error connecting to database: ' + error.stack);
      return;
    }
  
    console.log('Connected to database with connection id ' + connection.threadId);
});
  
module.exports = connection;