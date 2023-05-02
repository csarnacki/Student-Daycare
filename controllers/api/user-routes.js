// Import the Router constructor from the express package
const router = require('express').Router();
// Import the User model from our models directory
const User = require('./models/User');
// Import our custom authentication middleware
const withAuth = require('../../');