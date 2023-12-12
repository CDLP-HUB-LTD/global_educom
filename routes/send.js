const express = require('express');
const router = express.Router();
const crypto = require("crypto");
const validator = require('validator');


// async function hashPassword(password) {
//   try {
//     const salt = crypto.randomBytes(16).toString('hex');
//     const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512');
//     return {
//       salt,
//       hashedPassword: hash.toString('hex')
//     };
//   } catch (error) {
//     throw new Error('Error hashing password');
//   }
// }

// async function verifyPassword(password, hashedPassword, salt) {
//   try {
//     const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512');
//     return hashedPassword === hash.toString('hex');
//   } catch (error) {
//     throw new Error('Error verifying password');
//   }
// }

async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
}

async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}


router.post('/register', async (req, res) => {
  try {
    res.header('Access-Control-Allow-Origin', 'https://globaleducom.vercel.app');
    res.header('Access-Control-Allow-Credentials', true);
    const { fname, lname, email, phone, password, confirmPassword } = req.body;
    const role = 'user';

    const checkMailQuery = 'SELECT * FROM user WHERE user_email = ?';
    const results = await db.query(checkMailQuery, [email]);

    if (results.length > 0) {
      return res.status(400).json({ message: 'Email already registered', flashType: 'error' });
    }

    const { salt, hashedPassword } = await hashPassword(password);

    const insertUserQuery = 'INSERT INTO user (user_fname, user_lname, user_email, user_phone, user_password) VALUES (?, ?, ?, ?, ?)';
    const result = await db.query(insertUserQuery, [fname, lname, email, phone, hashedPassword]);

    req.session.user = {
      user_id: result.insertId,
      user_fname,
      user_lname,
      user_email,
      user_phone,
    };

    return res.status(201).json({
      message: 'User registered successfully',
      nextStep: '/next-login-page',
      flashMessage: 'Registration successful!', 
      flashType: 'success', 
    });
  } catch (error) {
    console.error('Error during user registration:', error);
    return res.status(500).json({ message: 'Error registering user', flashType: 'error' });
  }
});


 router.post('/login', (req, res) => {
  const { email, password } = req.body; 
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required', flashType: 'error' });
  }

  const checkMailQuery = 'SELECT * FROM user WHERE user_email = ?';
  db.query(checkMailQuery, [email], async (err, results) => {
      if (err) {
          return res.status(500).json({ message: 'Error checking user' });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: 'Email not registered. Please register first.', flashType: 'error' });
      }

      const user = results[0];
      const isPasswordMatch = await verifyPassword(password, user.user_password, user.salt);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Incorrect email or password', flashType: 'error' });
      }    

      const sessionUser = {
          user_id: user.user_id,
          user_fname: user.user_fname,
          user_email: user.user_email,
          user_phone: user.user_phone,
      };
      req.session.user = sessionUser;
      return res.status(200).json({
        message: 'Login successful',
        user: sessionUser,
        nextStep: '/user-dashboard',
        flashMessage: 'Welcome back!', 
        flashType: 'success', 
      });
  });
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
    
    db.query(insertResourceQuery, [title, course_id, description, content, img, status], function (err, result) {
      if (err) {
        return res.status(500).json({ message: 'Error creating resource' });
      }

      return res.status(201).json({
        message: 'Resource material created successfully',
        nextStep: '/redirect-to-resources'
      });
    });
  } else {
    // User is not authorized to create a resource
    res.status(403).json({ message: 'Unauthorized access' });
  }
});


 router.post('/admin/register', (req, res) => {
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
    db.query(checkMailQuery, [email], async function (err, results) {
      if (err) {
        return res.status(500).json({ message: 'Error checking email' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      const { salt, hashedPassword } = await hashPassword(password);

      const insertAdminQuery = 'INSERT INTO admin (admin_fname, admin_lname, admin_email, admin_phone, admin_password) VALUES (?, ?, ?, ?, ?)';
      db.query(insertAdminQuery, [fname, lname, email, phone, hashedPassword], function (err, result) {
        if (err) {
          return res.status(500).json({ message: 'Error registering admin' });
        }

        req.session.user = {
          admin_id: result.insertId,
          admin_fname,
          admin_lname,
          admin_email,
          admin_phone
        };

        return res.status(201).json({
          message: 'Admin registered successfully',
          nextStep: '/next-admin-login-page'
        });
      });
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
  db.query(checkMailQuery, [email], async (err, results) => {
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
