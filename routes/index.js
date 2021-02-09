
const express = require('express');

const router = express.Router();

console.log('Router is loaded');

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home)

router.use('/users',require('./users'));

// for any other routes,use it from here

module.exports = router;