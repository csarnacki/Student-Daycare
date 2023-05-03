//Handles the routes which return HTML content to the client, based on the route that the client requests.

// Import the necessary libraries and middleware
const router = require('express').Router();
// Require the 'path' module to work with file and directory paths
const path = require('path');
const withAuth = require('../utils/auth');

// GET route for the home page
// Test this in web browser: http://localhost:3001/
router.get('/', async (req, res) => {
  res.redirect('/dashbaord');
  res.render('homepage');
});

// GET route for the login page
// If the user is already logged in, redirect to the profile page
// Test this in web browser: http://localhost:3001/login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

// GET route for the profile page
// If the user is not logged in, redirect to the login page
// Test this in web browser: http://localhost:3001/profile
router.get('/profile', withAuth, async (req, res) => {
  res.render('profile');
});

module.exports = router;

