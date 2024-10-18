const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysql@123',
    connectionLimit: 10,
    database: 'test_sequelize'
})

// db.query('Select * from user', (err, result, fields) => {
//     if (err)
//         return console.error(err);
//     return console.log(result);
// })

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql@123'
