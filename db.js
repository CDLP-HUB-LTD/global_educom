const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "educom"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL Database", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});


// Table creation
const createUserTable = `
    CREATE TABLE IF NOT EXISTS user (
        UserId INT NOT NULL AUTO_INCREMENT,
        Name VARCHAR(120),
        email VARCHAR(120) UNIQUE,
        Phone VARCHAR(50),
        Password VARCHAR(80),
        Address TEXT,
        
        PRIMARY KEY (UserId)
    );
`;

db.query(createUserTable, (err, result) => {
    if (err) {
        console.error("Error creating user table", err);
    } else {
        console.log("User table created successfully");
    }
}); 


module.exports = (req, res, next) => {
    req.db = db;
    next();
};