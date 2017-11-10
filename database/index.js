const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('we are connected');
// });


let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  handle: String, 
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (id, name, handle, url) => {
	var entryObj = {
		id: id, 
		name: name, 
		handle: handle, 
		url: url
	}

}

module.exports.save = save;