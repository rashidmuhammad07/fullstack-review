var request = require('request');
const config = require('../config.js');
var Promise = require('bluebird');

request = Promise.promisifyAll(request);

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
   // method: 'GET', 
    headers: {
      'User-Agent': 'rashidmuhammad07',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  // console.log(options.url);

  request(options, (err, res, body) => {
    if (err) { 
      callback(err, null);
    } else {
      var parsedBody = JSON.parse(body);
      callback(null, parsedBody);
    }
  });

  // return request.getAsync(options)
  //   .then(function(body) {
  //     var parsedBody = JSON.parse(body.body);
  //     return parsedBody;
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   });
}

module.exports.getReposByUsername = getReposByUsername;