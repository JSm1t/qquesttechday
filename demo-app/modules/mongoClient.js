const MongoClient = require('mongodb').MongoClient;

const password = 'Y1hwTn9OIp8KDFOp';

const collectionName = 'test';

const dbName = '';

const url = `mongodb://QquestTechUser:${password}@qquesttechday-shard-00-00-m5w8o.mongodb.net:27017,qquesttechday-shard-00-01-m5w8o.mongodb.net:27017,qquesttechday-shard-00-02-m5w8o.mongodb.net:27017/${collectionName}?ssl=true&replicaSet=qquesttechday-shard-0&authSource=admin`;

MongoClient.connect(url, (err, db) => {
  if(err) {
    // throw err;
    console.error(err.message);
  } else {
    console.log('Succesful connection');
    db.close();
  }
})