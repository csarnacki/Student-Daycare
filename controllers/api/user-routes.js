// Import the Router constructor from the express package
const router = require('express').Router();
// Import the User model from our models directory
const User = require('./models/User');
// Import our custom authentication middleware
const withAuth = require('../../utils/auth');

// Define a route that handles a POST request to /api/users
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

