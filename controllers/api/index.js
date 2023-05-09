const router = require('express').Router();
const allergyRoutes = require('./allergy-routes');
const childRoutes = require('./child-routes');
const userRoutes = require('./user-routes');

router.use('/allergy', allergyRoutes);
router.use('/child', childRoutes);
router.use('/users', userRoutes);

module.exports = router;