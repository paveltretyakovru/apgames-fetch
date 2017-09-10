const express = require('express');
const router = express.Router();

// Helpers
const errorAction = require('../shared/errorAction');

// Users
const User = require('../user/user.model');
const UserService = require('../user/user.service');

// Initialize
const userService = new UserService();

// Get initial admin data
router.get('/', (req, res) => {
  let usersP = userService.findAll;

  Promise.all([usersP()])
    .then(
      resolve => res.json({
        users: resolve[0],
        sources: [],
      }),
      error => console.log('ERROR!', error)
    );
});

module.exports = router;