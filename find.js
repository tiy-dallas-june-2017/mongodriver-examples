const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {

  db.collection('teachers').find().toArray(function(err, docs) {
    console.log('found teachers', docs);
    db.close();
  });

});
