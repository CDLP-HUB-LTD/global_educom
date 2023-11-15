const express = require('express');
const router = express.Router();

// GET REQUESTS
/**
 * @swagger
 * /docs:
 *   get:
 *     summary: Returns the landing for the API
 *     description: Fetch Educom
 *     responses:
 *       200:
 *         description: Fetch Global Educom
 */
router.get('/', (req, res) => {
res.json({ message: "Welcome to Global Educom" });
});


/**
 * @swagger
 * /docs/users:
 *   get:
 *     summary: Returns data for all users
 *     description: Get All Users
 *     responses:
 *       200:
 *         description: Get All Users
 */
 router.get('/users', (req, res) => {
    const db = req.db;
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            console.error("Error fetching data from the database", err);
            res.status(500).json({ Message: "Internal Server Error" });
        } else {
            if (results.length === 0) {
                res.status(404).json({ Message: "Users not available" });
            } else {
                res.json({ data: results });
            }
        }
    });
});

/**
 * @swagger
 * /docs/users/user/{id}:
 *   get:
 *     summary: Returns data for a specific user
 *     description: Get User By ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Get User by ID
 */
 router.get('/users/user/:id', (req, res) => {
    const db = req.db;
    const userId = req.params.id;

    if (!userId || isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID provided" });
    }

    db.query('SELECT * FROM user WHERE user_id = ?', [userId], (err, results) => {
        if (err) {
            console.error("Error fetching data from the database", err);
            return res.status(500).json({ Message: "Internal Server Error", details: err.message });
        } else {
            if (results.length === 0) {
                return res.status(404).json({ message: "User not found" });
            } else {
                return res.json({ data: results });
            }
        }
    });
});


/**
 * @swagger
 * /docs/courses:
 *   get:
 *     summary: Returns data for all courses
 *     description: Get All Courses
 *     responses:
 *       200:
 *         description: Get All Courses
 */
router.get('/courses', (req, res) => {
    const db = req.db;
    db.query('SELECT * FROM course', (err, results) => {
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
});


/**
 * @swagger
 * /docs/courses/course/{id}:
 *     get:
 *     summary: Returns data for a specific course
 *     description: Get Course By ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Course ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Get Course by ID
 */
router.get('/courses/course/:id', (req, res) => {
    const db = req.db;
    const courseId = req.params.id;
    if (!courseId || isNaN(courseId)) {
        return res.status(400).json({ Message: "Invalid course ID provided" });
    }

    db.query('SELECT * FROM course WHERE course_id = ?', [courseId], (err, results) => {
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
});

/**
 * @swagger
 * /docs/disciplines:
 *   get:
 *     summary: Returns data for all disciplines
 *     description: Get All Disciplines
 *     responses:
 *       200:
 *         description: Get All Disciplines
 */
router.get('/disciplines', (req, res) => {
    const db = req.db;
    db.query('SELECT * FROM discipline', (err, results) => {
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
});


/**
 * @swagger
 * /docs/disciplines/discipline/{id}:
 *    get:
 *     summary: Returns data for a specific discipline
 *     description: Get Discipline By ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: DISCIPLINE ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Get Discipline by ID
 */
router.get('/disciplines/discipline/:id', (req, res) => {
    const db = req.db;
    const disciplineId = req.params.id;
    if (!disciplineId || isNaN(disciplineId)) {
        return res.status(400).json({ Message: "Invalid discipline ID provided" });
    }

    db.query('SELECT * FROM discipline WHERE discipline_id = ?', [disciplineId], (err, results) => {
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
});

/**
 * @swagger
 * /docs/resources:
 *   get:
 *     summary: Returns data for all approved resource materials
 *     description: Get All Approved Resourse Materials
 *     responses:
 *       200:
 *         description: Get All Approved Resource Materials
 */
 router.get('/resources', (req, res) => {
    const db = req.db;
    // Assuming 'status' column in your resource table
    const status = 'approved';
    db.query('SELECT * FROM resource WHERE status = ?', [status], (err, results) => {
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
});

/**
 * @swagger
 * /docs/resources/resource/{id}:
 *   get:
 *     summary: Returns data for a specific approved Resource Material
 *     description: Get Approved Resource Material By ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: RESOURCE ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Get Approved Resource Material by ID
 */
router.get('/resources/resource/:id', (req, res) => {
    const db = req.db;
    const resourceId = req.params.id;
    
    if (!resourceId || isNaN(resourceId)) {
        return res.status(400).json({ Message: "Invalid Resource ID provided" });
    }

    const status = 'approved';
    db.query('SELECT * FROM resource WHERE resource_id = ? AND status = ?', [resourceId, status], (err, results) => {
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
});


/**
 * @swagger
 * /docs/resources/pending-resources:
 *   get:
 *     summary: Returns data for all pending resource materials
 *     description: Get All Pending Resourse Materials (Admin Only)
 *     responses:
 *       200:
 *         description: Get All Pending Resource Materials
 */
 router.get('/resources/pending-resources', (req, res) => {
    const db = req.db;
    const userRole = req.session.user.role;

    if (userRole !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized access' });
    }

    const status = 'pending';

    db.query('SELECT * FROM resource WHERE status = ?', [status], (err, results) => {
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
});


module.exports = router