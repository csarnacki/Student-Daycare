//Handles the routes which return HTML content to the client, based on the route that the client requests.

// Import the necessary libraries and middleware
const router = require('express').Router();
const { Child, Allergy } = require('../models');
const withAuth = require('../utils/auth');

// Route for homepage
// Test in web browser: http://localhost:3001/
router.get('/', (req, res) => {
    res.render('homepage', { layout: 'main', loggedIn: req.session.logged_in });
});

// Route for login page
// Test in web browser: http://localhost:3001/login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login', { layout: 'main' });
});

