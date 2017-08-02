const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {

  db.collection('teachers').remove({ _id: ObjectId('5981e86aff98141239aa9b12') }, function(err, result) {
    console.log('err', err);
    console.log('result', result);
    db.close();
  });

});
