const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'intranet_unisabaneta'
});



connection.connect(function(err) {
    if (err) throw err
    console.log("Base de datos conectada");
});


module.exports = connection