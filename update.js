const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {

  db.collection('teachers').update({ name: 'Mrs. Doubtfire' }, { $set: { age: 64 }}, function(err, result) {
    console.log('err', err);
    console.log('result', result);
    db.close();
  });

});
