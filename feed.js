var mongo = require('mongodb');
var monk = require('monk');
var fs = require('fs');
var xml2js = require('xml2js');

// one param = path of the source json file, with docs to store
if (process.argv.length < 3)
	return console.log("missing file path")
file = process.argv[2];

// create a Mongodb connection on the 'cinema' db


var parser = new xml2js.Parser();
fs.readFile(file, function (err, data) {
	parser.parseString(data, function (err, result) {
		console.log(result.movies.movie);
		console.log('Done');

		var moviedata = result.movies.movie;


// create a Mongodb connection on the 'cinema' db
		var db = monk('localhost:27017/desi');

// access the 'films' collection
		var films = db.get('movies');

// save the docs, one after the other (no bulk insert with monk)
// need to count inserted docs for closing the db *after* the last doc has been saved
		var doccount = 0;
		for (var i = 0; i < moviedata.length; i++) {
			// insert a doc (async); here I filter the french version (.fr) of the data[i] structure
			films.insert(moviedata[i],
				function (err, doc) {
					if (err) throw err;
				});
		}
		db.close();
	});
});
