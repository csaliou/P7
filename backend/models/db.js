// Connexion à la bade de données MySQL
const mysql = require('mysql2');

require('dotenv').config()

// Création de la connexion
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'socialadmin',
    password : 'Serigne1',
    database : 'groupomania'
});

// Connection 
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL est connecté :)');
});

module.exports = db;