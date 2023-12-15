const express = require("express");
const router = express.Router();
const database = require("../db");

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Global Educom" });
});

router.get("/users", async (req, res) => {
  try {
    const results = await database.query("SELECT * FROM user");
    if (results.length === 0) {
      res.status(404).json({ Message: "Users not available" });
    } else {
      res.json({ data: results });
    }
  } catch (error) {
    console.error("Error fetching data from the database", error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
});

router.get("/users/user/:id", async (req, res) => {
  const userId = req.params.id;
  
  if (!userId || isNaN(userId)) {
    return res.status(400).json({ message: "Invalid user ID provided" });
  }

  try {
    const results = await database.query("SELECT * FROM user WHERE user_id = ?", [userId]);
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.json({ data: results[0] });
    }
  } catch (error) {
    console.error("Error fetching user data from the database", error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
});


router.get("/courses", (req, res) => {
    let connection;
    const db = req.db;

    connection = mysql.createConnection(req.dbConfig);

    database.query("SELECT * FROM course", (err, results) => {
    if (err) {
        console.error("Error fetching data from the database", err);
        res.status(500).json({ Message: "Internal Server Error" });
    
    } else {
        if (results.length === 0) {
            res.status(404).json({ Message: "Courses not available" });
        
        } else {
            res.json({ data: results });
        }
    }
    });

    if (connection) {
        connection.end(); 
      }
});



router.get("/courses/course/:id", (req, res) => {
    let connection;
    const db = req.db;
    const courseId = req.params.id;
    if (!courseId || isNaN(courseId)) {
        return res.status(400).json({ Message: "Invalid course ID provided" });
    }

    connection = mysql.createConnection(req.dbConfig);

    database.query("SELECT * FROM course WHERE course_id = ?", [courseId], (err, results) => {
    if (err) {
        console.error("Error fetching data from the database", err);
        return res.status(500).json({ Message: "Internal Server Error", details: err.message });
    
    } else {
        if (results.length === 0) {
            return res.status(404).json({ message: "Course not found" });
        
        } else {
            return res.json({ data: results });
        }
    }
    });

    if (connection) {
        connection.end(); 
      }
});


router.get("/disciplines", (req, res) => {
    let connection;
    const db = req.db;

    connection = mysql.createConnection(req.dbConfig);

    database.query("SELECT * FROM discipline", (err, results) => {
    if (err) {
        console.error("Error fetching data from the database", err);
        res.status(500).json({ Message: "Internal Server Error" });
    } else {
        if (results.length === 0) {
            res.status(404).json({ Message: "Disciplines not available" });
        } else {
            res.json({ data: results });
        }
    }
    });

    if (connection) {
        connection.end(); 
      }
});


router.get("/disciplines/discipline/:id", (req, res) => {
    let connection;
    const db = req.db;
    const disciplineId = req.params.id;
    if (!disciplineId || isNaN(disciplineId)) {
        return res.status(400).json({ Message: "Invalid discipline ID provided" });
    }

    connection = mysql.createConnection(req.dbConfig);

    database.query("SELECT * FROM discipline WHERE discipline_id = ?", [disciplineId], (err, results) => {
    if (err) {
        console.error("Error fetching data from the database", err);
        return res.status(500).json({ Message: "Internal Server Error", details: err.message });
    } else {
        if (results.length === 0) {
            return res.status(404).json({ message: "Discipline not found" });
        } else {
            return res.json({ data: results });
        }
    }
    });
    if (connection) {
        connection.end(); 
      }
});


 router.get("/resources", (req, res) => {
    let connection;
    const db = req.db;
    const status = "approved";

    connection = mysql.createConnection(req.dbConfig);

    database.query("SELECT * FROM resource WHERE status = ?", [status], (err, results) => {
    if (err) {
        console.error("Error fetching data from the database", err);
        res.status(500).json({ Message: "Internal Server Error" });
    } else {
        if (results.length === 0) {
            res.status(404).json({ Message: "No approved resource materials available" });
        } else {
            res.json({ data: results });
        }
    }
    });
    if (connection) {
        connection.end(); 
      }
});


router.get("/resources/resource/:id", (req, res) => {
    let connection;
    const db = req.db;
    const resourceId = req.params.id;

    connection = mysql.createConnection(req.dbConfig);
    
    if (!resourceId || isNaN(resourceId)) {
        return res.status(400).json({ Message: "Invalid Resource ID provided" });
    }

    const status = "approved";
    database.query("SELECT * FROM resource WHERE resource_id = ? AND status = ?", [resourceId, status], (err, results) => {
    if (err) {
        console.error("Error fetching data from the database", err);
        return res.status(500).json({ Message: "Internal Server Error", details: err.message });
    } else {
        if (results.length === 0) {
            return res.status(404).json({ message: "Approved resource material not found" });
        } else {
            return res.json({ data: results });
        }
    }
    });

    if (connection) {
        connection.end(); 
      }
});


 router.get("/resources/pending-resources", (req, res) => {
    let connection;
    const db = req.db;
    const userRole = req.session.user.role;

    connection = mysql.createConnection(req.dbConfig);

    if (userRole !== "admin") {
        return res.status(403).json({ message: "Unauthorized access" });
    }

    const status = "pending";

    database.query("SELECT * FROM resource WHERE status = ?", [status], (err, results) => {
    if (err) {
        console.error("Error fetching data from the database", err);
        res.status(500).json({ Message: "Internal Server Error" });
    
    } else {
        if (results.length === 0) {
            res.status(404).json({ Message: "No pending resource materials available" });
        
        } else {
            res.json({ data: results });
        }
    }
    });
    if (connection) {
        connection.end(); 
      }
});


module.exports = router