// const fetch = require('node-fetch');
const request = require('request');

const serverHost = 'http://apgames.ru/ru-ru'

class SourcesService {
  consturctor() {
    console.log('Sources service');
  }

  findAll() {
    var options = {
      url: 'https://api.github.com/repos/request/request',
      headers: {
        'User-Agent': 'request'
      }
    };

    return new Promise((resolve, reject) => {
      request(SourcesService.apiRoutes.allSources, (err, response, body) => {
        if(err) reject(err);
        else resolve(JSON.parse(body).result.sources); 
      });
    });
  }
}

SourcesService.apiRoutes = {
  allSources: `${serverHost}/apiWmSources/?key=aSjIDQlqtjLDaTAB&format=json`
};

module.exports = SourcesService;