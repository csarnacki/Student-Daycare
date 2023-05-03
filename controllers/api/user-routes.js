// Import the Router constructor from the express package
const router = require('express').Router();
// Import the User model from our models directory
const User = require('./models/User');
// Import our custom authentication middleware
const withAuth = require('../../utils/auth');

// Define a route that handles a POST request to /api/users
// Test this in Insomnia with: POST http://localhost:3001/api/users
router.post('/', async (req, res) => {
    try {
        //Create a new user in the database using the data sent in the request body
        const userData = await User.create(req.body);

        // Save the user's ID and logged-in status to the session
        req.session.save(()=> {
            //storing the logged-in user's ID in the session.
            //userData.id = the ID of the user who just logged in
            req.session.user_id = userData.id;
            //check whether the user is logged in or not
            // If req.session.logged_in is true, then the user is logged in
            req.session.logged_in = true;

            // Respond with the user's data and a status code of 200 (OK)
            res.status(200).json(userData);
        });
    } catch (err) {
        // If there was an error, respond with the error and a status code of 400 (Bad Request)
        res.status(400).json(err);
    }
});

// Define a route that handles a POST request to /api/users/login
// Test this in Insomnia with: POST http://localhost:3001/api/users/login
router.post('/login', async (req, res) => {
    try {
      // Find a user in the database with the email sent in the request body
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      // If no user was found, respond with an error message and a status code of 400
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

// Check if the password sent in the request matches the user's password
const validPassword = await userData.checkPassword(req.body.password);    

// If the passwords don't match, respond with an error message and a status code of 400
if (!validPassword) {
    res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
    return;
  }

// Save the user's ID and logged-in status to the session
req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    // Respond with the user's data and a success message
    res.json({ user: userData, message: 'You are now logged in!' });
  });

} catch (err) {
  // If there was an error, respond with the error and a status code of 400
  res.status(400).json(err);
}
});

// Define a route that handles a POST request to /api/users/logout
// Test this in Insomnia with: POST http://localhost:3001/api/users/logout
router.post('/logout', withAuth, (req, res) => {
    // If the user is logged in
    if (req.session.logged_in) {
      // Destroy the session and respond with a status code of 204 (No Content)
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      // If the user is not logged in, respond with a status code of 404 (Not Found)
      res.status(404).end();
    }
  });

// Export the router so it can be used by the rest of our application
module.exports = router;