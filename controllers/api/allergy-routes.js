// Import the Router constructor from the express package
const router = require('express').Router();

const { User } = require('../../models');
// Import our custom authentication middleware
const withAuth = require('/utils/auth');