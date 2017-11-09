const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    method: 'GET', 
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  console.log(options.url);
  request(options, (err, res, body) => {
    if (err) { return console.log('error is ', err); }
    var parsedBody = JSON.parse(body);
    console.log(parsedBody);
    res.send(200, parsedBody);
  });

}


module.exports.getReposByUsername = getReposByUsername;