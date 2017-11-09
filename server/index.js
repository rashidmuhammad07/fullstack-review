const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
	console.log('I am receiving a post requesttttttt');
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
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

