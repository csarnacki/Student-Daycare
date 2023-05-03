// Import the Router constructor from the express package
const router = require('express').Router();
const { Allergy } = require('../../models');
// Import our custom authentication middleware
const withAuth = require('/utils/auth');


// Route for a child's allergies page
router.get('/child/:child_id/allergies', withAuth, async (req, res) => {
    try {
        // Get all of the allergies associated with the child ID
        const allergyData = await Allergy.findAll({ where: { child_id: req.params.child_id } });
        // Serialize the data so the template can read it
        const allergies = allergyData.map(allergy => allergy.get({ plain: true }));
        res.render('allergies', { layout: 'main', allergies, loggedIn: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
  });

