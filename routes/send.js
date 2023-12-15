const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const database = require('../db');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'gdte73';

async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
}

async function verifyPassword(password, hashedPassword, salt) {
  return await bcrypt.compare(password, hashedPassword);
}


router.post('/register', async (req, res) => {
  try {
    const { fname, lname, email, phone, password, confirmPassword } = req.body;
    const role = 'user';

    const checkMailQuery = 'SELECT * FROM user WHERE user_email = ?';
    const existingUser = await database.query(checkMailQuery, [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ success: false, message: 'Email already registered', flashType: 'error' });
    }

    const { salt, hashedPassword } = await hashPassword(password);

    const insertUserQuery = 'INSERT INTO user (user_fname, user_lname, user_email, user_phone, user_password) VALUES (?, ?, ?, ?, ?)';
    const result = await database.query(insertUserQuery, [fname, lname, email, phone, hashedPassword]);

    req.session.user = {
      user_id: result.insertId,
      user_fname: fname,
      user_lname: lname,
      user_email: email,
      user_phone: phone,
      role: 'user',
    };

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      nextStep: '/next-login-page',
      flashMessage: 'Registration successful!',
      flashType: 'success',
    });

  } catch (error) {
    console.error('Error during user registration:', error);
    return res.status(500).json({ success: false, message: 'Error registering user', flashType: 'error' });
  
  }

});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: { message: 'All fields are required' } });
  }

  try {
    const checkMailQuery = 'SELECT * FROM user WHERE user_email = ?';
    const result = await database.query(checkMailQuery, [email]);

    console.log('Result from query:', result);

    if (!result || result.length === 0) {
      console.log('No user found with the given email:', email);
      return res.status(401).json({ message: 'Email not registered. Please register first.', flashType: 'error' });
    }

    const user = result[0]

    const isPasswordMatch = await verifyPassword(password, user.user_password, user.salt);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: { message: 'Incorrect email or password' } });
    }


    const sessionUser = {
      userId: user.user_id,
      user_fname: user.user_fname,
      user_email: user.user_email,
      user_phone: user.user_phone,
    };
    
    const token = jwt.sign({ userId: user.user_id }, secretKey, { expiresIn: '1h' });

    req.session.user = sessionUser;

    return res.status(200).json({
      message: 'Login successful',
      userId: user.user_id,
      user: sessionUser,
      nextStep: '/user-dashboard',
      flashMessage: `Welcome back, ${user.user_fname}`,
      token,
    });
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ error: { message: 'Internal server error' } });
  }
});





router.post("/resources/resource", (req, res) => {
  const { title, course_id, description, content, img } = req.body;
  const userId = req.session.user.user_id; 
  const userRole = req.session.user.role; 

  if (userRole === 'contributor' || userRole === 'admin') {
    let status = 'approved'; 
    if (userRole === 'contributor') {
      status = 'pending'; 
    }

    const insertResourceQuery = 'INSERT INTO resource (resource_title, resource_course_id, resource_description, resource_content, resource_img, status) VALUES (?, ?, ?, ?, ?, ?)';
    
    database.query(insertResourceQuery, [title, course_id, description, content, img, status], function (err, result) {
      if (err) {
        return res.status(500).json({ message: 'Error creating resource' });
      }

      return res.status(201).json({
        message: 'Resource material created successfully',
        nextStep: '/redirect-to-resources'
      });
    });
  } else {

    res.status(403).json({ message: 'Unauthorized access' }); // User is not authorized to create a resource
  }
});


router.post('/admin/register', async (req, res) => {
  try {
    const { fname, lname, email, phone, password, confirmPassword } = req.body;
    const role = 'admin'; 

    if (![fname, lname, email, phone, password, confirmPassword].every((field) => field !== undefined && field !== null && field !== '')) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Both passwords must match!' });
    }

    const checkMailQuery = 'SELECT * FROM admin WHERE admin_email = ?';
    const results = await database.query(checkMailQuery, [email]);

    if (results.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const { salt, hashedPassword } = await hashPassword(password);

    const insertAdminQuery = 'INSERT INTO admin (admin_fname, admin_lname, admin_email, admin_phone, admin_password) VALUES (?, ?, ?, ?, ?)';
    const result = await database.query(insertAdminQuery, [fname, lname, email, phone, hashedPassword]);

    req.session.admin = {
      admin_id: result.insertId,
      admin_fname: fname,
      admin_lname: lname,
      admin_email: email,
      admin_phone: phone,
      role: 'admin', 
    };

    return res.status(201).json({
      message: 'Admin registered successfully',
      nextStep: '/next-admin-login-page'
    });

  } catch (error) {
    console.error('Error during admin registration:', error);
    return res.status(500).json({ message: 'Error registering admin' });
  }
});



 router.post('/admin/login', (req, res) => {
  const { email, password } = req.body; 
  if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
  }

  const checkMailQuery = 'SELECT * FROM admin WHERE admin_email = ?';
  database.query(checkMailQuery, [email], async (err, results) => {
      if (err) {
          return res.status(500).json({ message: 'Error checking admin' });
      }

      if (results.length === 0) {
          return res.status(401).json({ message: 'Email not registered. Please register first.' });
      }

      const admin = results[0];
      const isPasswordMatch = await verifyPassword(password, admin.admin_password, admin.salt);
      if (!isPasswordMatch) {
          return res.status(401).json({ message: 'Incorrect email or password' });
      }

      const sessionAdmin = {
          admin_id: admin.admin_id,
          admin_fname: admin.admin_fname,
          admin_email: admin.admin_email,
          admin_phone: admin.admin_phone,
      };
      req.session.admin = sessionAdmin;
      return res.status(200).json({
          message: 'Login successful',
          admin: sessionAdmin,
          nextStep: '/admin-dashboard', 
      });
  });
});


module.exports = router;
