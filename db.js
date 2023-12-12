const mysql = require("mysql");

const db = mysql.createConnection({
    host: "demowordpress.vtudomain.com",
    user: "demo_admin",
    password: "Demo_Admin",
    database: "demo_api"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL Database", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});


// Table creation
const createAdminTable = `
    CREATE TABLE IF NOT EXISTS admin (
        admin_id INT NOT NULL AUTO_INCREMENT,
        admin_fname VARCHAR(120),
        admin_lname VARCHAR(120),
        admin_email VARCHAR(120) UNIQUE,
        admin_phone VARCHAR(50),
        admin_password VARCHAR(80),
        
        PRIMARY KEY (admin_id)
    );
`;

const createUserTable = `
    CREATE TABLE IF NOT EXISTS user (
        user_id INT NOT NULL AUTO_INCREMENT,
        user_fname VARCHAR(120),
        user_lname VARCHAR(120),
        user_email VARCHAR(120) UNIQUE,
        user_phone VARCHAR(50),
        user_password VARCHAR(80),
        role VARCHAR(50) DEFAULT 'user',
        
        PRIMARY KEY (user_id)
    );
`;

const createDisciplineTable = `
    CREATE TABLE IF NOT EXISTS discipline (
       discipline_id INT NOT NULL AUTO_INCREMENT,
        dicipline_name VARCHAR(120),
        
        PRIMARY KEY (discipline_id)
    );
`;

const createCourseTable = `
    CREATE TABLE IF NOT EXISTS course (
        course_id INT NOT NULL AUTO_INCREMENT,
        course_title VARCHAR(120),
        course_discipline_id INT,
        
        PRIMARY KEY (course_id),
        FOREIGN KEY (course_discipline_id) REFERENCES discipline(discipline_id)
    );
`;

const createResourceTable = `
    CREATE TABLE IF NOT EXISTS resource (
        resource_id INT NOT NULL AUTO_INCREMENT,
        admin_id INT,
        resource_title VARCHAR(120),
        resource_course_id INT,
        resource_description VARCHAR(120),
        resource_content TEXT,
        resource_img VARCHAR(150),
        status VARCHAR(50) DEFAULT 'pending',
        
        PRIMARY KEY (resource_id),
        FOREIGN KEY (admin_id) REFERENCES admin(admin_id),
        FOREIGN KEY (resource_course_id) REFERENCES course(course_id)
    );
`;

const createUserResourceTable = `
    CREATE TABLE IF NOT EXISTS user_resource (
        user_resource_id INT NOT NULL AUTO_INCREMENT,
        user_id INT,
        resource_id INT,
        
        PRIMARY KEY (user_resource_id),
        FOREIGN KEY (user_id) REFERENCES user(user_id),
        FOREIGN KEY (resource_id) REFERENCES resource(resource_id)
    );
`;


db.query(createAdminTable, (err, result) => {
    if (err) {
        console.error("Error creating admin table", err);
    } else {
        console.log("Admin table created successfully");
    }
}); 


db.query(createUserTable, (err, result) => {
    if (err) {
        console.error("Error creating user table", err);
    } else {
        console.log("User table created successfully");
    }
}); 

db.query(createDisciplineTable, (err, result) => {
    if (err) {
        console.error("Error creating discipline table", err);
    } else {
        console.log("discipline table created successfully");
    }
}); 

db.query(createCourseTable, (err, result) => {
    if (err) {
        console.error("Error creating course table", err);
    } else {
        console.log("course table created successfully");
    }
}); 

db.query(createResourceTable, (err, result) => {
    if (err) {
        console.error("Error creating resource table", err);
    } else {
        console.log("resource table created successfully");
    }
}); 

db.query(createUserResourceTable, (err, result) => {
    if (err) {
        console.error("Error creating user_resource table", err);
    } else {
        console.log("user_resource table created successfully");
    }
}); 



module.exports = db;