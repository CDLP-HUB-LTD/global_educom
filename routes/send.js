const express = require('express');
const router = express.Router();


/**
 * @swagger
 * /docs/user:
 *   post:
 *     summary: Creates a new user
 *     description: Create a new user in Global Educom
 *     responses:
 *       200:
 *         description: User created successfully
 */
 router.post('/user', (req, res) => {
    res.json({ message: "Welcome to Global Educom" });
  });



module.exports = router