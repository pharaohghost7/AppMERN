const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'loscalhost',
    user: 'root',
    password: '',
    database: 'Notes'
});

connection.connect(function(err){
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

$query = 'SELECT * FROM 'tABLA' LIMIT 10';

connection.query($query, function(err, rows, fields){
    if(err){
        console.log("Error en la query");
        return;
    }
    console.log("consulta exitosa", rows)
})