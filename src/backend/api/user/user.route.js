const express = require('express');
const router = express.Router();

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

module.exports = router;