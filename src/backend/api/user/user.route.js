const User = require('./user.model');
const express = require('express');
const router = express.Router();
const errorAction = require('../shared/errorAction');

router.post('/login', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  console.log('Req body', req.body);

  if(login && password) {
    if(login === 'admin' && password === '1234') {
      return res.json(req.body);
    } else {
      return res.status(500).json({message: 'Login admin failed', data: req.body});
    }
  } else {
    return res.status(500).json({message: 'Login failed', data: req.body});
  }

});

router.post('/add', (req, res) => {
  let login = req.body.login || '';
  let password = req.body.password || '';

  if(login && password) {
    let user = new User({login: login, password: password});
    console.log('Adding new user', user);
    user.save((error) => {
      if(!error) {
        return res.json({result: true, user: { login: login }});
      } else {
        errorAction(error);
        return res.status(500).json({result: false});
      }
    });
  } else {
    return res.status(500).json({message: 'Login failed', data: req.body});
  }

});

router.get('/list', (req, res) => {
  User.find().lean().exec((err, users) => {
    let usersList = [];
    for(let i = 0; i < users.length; i++) {
      usersList.push({login: users[i].login});
    }
    return res.json(usersList);
  });
});

module.exports = router;