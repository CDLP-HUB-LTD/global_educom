const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Add this line
const router = express.Router();

const apiEndpoint = 'https://globaleducomm.com';

router.use(cors());

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${apiEndpoint}/api`);
    const responseData = response.data;

    res.json({ success: true, data: responseData });
  } catch (error) {
    console.error('Error connecting to API:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
