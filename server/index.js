const express = require('express');
const repoGrabber = require('../helpers/github');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
let app = express();

repoGrabber.getReposByUsername = Promise.promisify(repoGrabber.getReposByUsername);
// ----------------------------------------------------
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ----------------------------------------------------

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
app.post('/repos', function (req, res) {
  console.log(req.body.term);
  repoGrabber.getReposByUsername(req.body.term)
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log('here is an error');
    });
  // console.log(req.body.term);
  // var result = repoGrabber.getReposByUsername(req.body.term);
  // console.log('result is ', result);
  //console.log('hey it is coming from app.post', repositories);
  //res.send('hey i am in the post request of server');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('hey it is working ')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

