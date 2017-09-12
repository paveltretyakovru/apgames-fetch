const User = require('./user.model');

class UserService {
  constructor() {
    console.log('UserService');
  }

  findAll() {
    return new Promise((res, rej) => {
      User.find().lean().exec((err, users) => {
        let collection = [];
        
        for(let i = 0; i < users.length; i++) {
          let user = users[i];
    
          collection.push({
            id: user._id,
            login: user.login,
            sources: user.sources,
          });
        }

        if(err) { rej(err); }
        else { res(collection); }
      });
    });
  }
}

module.exports = UserService;