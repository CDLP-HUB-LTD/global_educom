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
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: "Users not available" });
            } else {
                res.json({ data: results });
            }
        }
    });
});



module.exports = router