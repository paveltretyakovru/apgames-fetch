const express = require('express');
const router = express.Router();

// Helpers
const errorAction = require('../shared/errorAction');

// Sources
const SourcesService = require('../sources/sources.service');

// Users
const User = require('../user/user.model');
const UserService = require('../user/user.service');

// Initialize
const userService = new UserService();
const sourcesService = new SourcesService();

// Get initial admin data
router.get('/', (req, res) => {
  let usersP = userService.findAll;
  let sourcesP = sourcesService.findAll;

  Promise.all([usersP(), sourcesP()])
    .then(
      resolve => res.json({
        users: resolve[0],
        sources: resolve[1],
      }),
      error => console.log('ERROR!', error)
    );
});

module.exports = router;