const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiEndpoint = 'https://globaleducomm.com';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${apiEndpoint}/api`);

    const responseData = response.data;

    res.json({ success: true, data: "Hello world!" });
  } catch (error) {
    console.error('Error connecting to API:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
