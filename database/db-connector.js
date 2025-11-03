// ./database/db-connector.js

// Database
// I got this error : Client does not support authentication protocol requested by server; consider upgrading MySQL client
// so I used this recommendation: https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server/56509065#56509065 
var mysql = require('mysql2');

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'root',
    password        : 'ally0824!!',
    database        : 'foodShare' // can change to foodShare when ready 
});

// Export it for use in our applicaiton
module.exports.pool = pool;
