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
  const login = req.body.login || '';
  const password = req.body.password || '';

  if(login && password) {
    const user = new User({login: login, password: password});
    user.save((error) => {
      if(!error) {
        return res.json({result: true});
      } else {
        errorAction(error);
        return res.status(500).json({result: false});
      }
    });
  } else {
    return res.status(500).json({message: 'Login failed', data: req.body});
  }

});

module.exports = router;