const router = require('express').Router();
const allergyRoutes = require('./allergy-routes');
const childRoutes = require('./child-routes');
const userRoutes = require('./user-routes');

router.use('/api/allergy', allergyRoutes);
router.use('/api/child', childRoutes);
router.use('/api/users', userRoutes);

module.exports = router;