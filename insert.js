const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {

  db.collection('teachers').insert({ name: 'Mrs. Doubtfire', age: 62 }, function(err, result) {
    console.log('err', err);
    console.log('result', result);
    db.close();
  });

});
