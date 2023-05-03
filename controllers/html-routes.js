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
        res.redirect('/children');
        return;
    }
    res.render('login', { layout: 'main' });
});

// Route for dashboard (handled by children.handlebars)
// Test in web browser:  http://localhost:3001/dashboard
router.get('/children', withAuth, async (req, res) => {
    try {
        //// findByPk =Sequelize method used to find a record by its primary key.
        const user = await User.findByPk(req.session.user_id, {
            include: [{ model: Child }]
      });
      // Serialize the data so the template can read it
      const children = user.children.map((child) => child.get({ plain: true }));
  
      res.render('children', { layout: 'main', children, loggedIn: true });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Route to view child's profile after select name in dashboard 
// Test in web browser: http://localhost:3001/child/{child_id}
router.get('/child/:id', withAuth, async (req, res) => {
    try {
        const child = await Child.findByPk(req.params.id, {
            include: [
            {
                model: Allergy,
                through: { attributes: [] },
            },
            ]
        });
  
        const childPlain = child.get({ plain: true });
        // map = returns a new array of the same length as the original, with the results of the callback function applied to each element
        // Serialize the data so the template can read it
        childPlain.allergies = childPlain.allergies.map((allergy) => allergy.name);
  
        res.render('child', { layout: 'main', child: childPlain, loggedIn: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

