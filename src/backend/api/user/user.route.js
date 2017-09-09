const User = require('./user.model');
const express = require('express');
const router = express.Router();
const errorAction = require('../shared/errorAction');

router.post('/login', (req, res) => {

  const login = req.body.login || '';
  const password = req.body.password || '';

  const query = User.where({name: login});
  query.findOne((err, user) => {
    if (err) console.log('Error:', err);

    // Если пользователь найден
    if (user) {
      // Если логин и пароль верны
      if(user.authenticate(password)) {
        console.log('Successfull user login', user.id);

        res.json({success: true, message: 'Authenticate is success'});
      } else {
        console.log(`Unsuccessfull auth. Login: ${login}, pass: ${password}`);
        res.status(500).json({success: false, message: 'Invalid login or password'});
      }
    } else {
      console.log(`Unsuccessfull auth. Login: ${login}, pass: ${password}`);
      res.status(500).json({success: false, message: 'Invalid login or password'});
    }

  });

});

router.post('/add', (req, res) => {
  let login = req.body.login || '';
  let password = req.body.password || '';

  if(login && password) {
    let user = new User({login: login, password: password});
    
    console.log('Saving new user', user);
    user.save((error, model) => {
      if(!error) {
        return res.json({
          user: { login: login, id: model._id },
          success: true,
          message: `User ${login} was added`,
        });
      } else {
        errorAction(error).catch((errorDump) => {
          return res.status(500).json({
            success: false,
            message: `Ошибка во время выполнения запроса. ${errorDump}`,
          });  
        });
      }
    });
  } else {
    return res.status(500).json({success: false, message: 'All inputs required'});
  }

});

router.get('/list', (req, res) => {
  User.find().lean().exec((err, users) => {
    let usersList = [];
    for(let i = 0; i < users.length; i++) {
      usersList.push({
        id: users[i]._id,
        login: users[i].login,
      });
    }
    return res.json(usersList);
  });
});

module.exports = router;